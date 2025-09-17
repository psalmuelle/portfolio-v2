import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { getNoteBySlug, getAllNoteSlugs } from '@/lib/graphql/server';
import { generateArticleSchema } from '@/utils/structuredData';
import Breadcrumbs from '@/components/Breadcrumbs';
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export async function generateStaticParams() {
  try {
    const slugs = await getAllNoteSlugs();
    return slugs;
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;

  try {
    const note = await getNoteBySlug(slug);

    if (!note) {
      return {
        title: 'Note Not Found',
        description: 'The requested note could not be found.',
      };
    }

    const title = `${note.title}`;
    const description =
      note.description ||
      `Read about ${note.title} and insights from Erinle Sam's development journey.`;
    const publishedDate = new Date(note.dateCreated).toISOString();
    const url = `https://erinlesam.com/notes/${slug}`;
    const imageUrl = note.featuredImage?.url || '/opengraph-image.png';

    return {
      title,
      description,
      keywords: [
        note.title.split(' ').slice(0, 3).join(' '),
        'Web Development',
        'Programming',
        'Tutorial',
        'Tech Notes',
        'Development Blog',
      ],
      authors: [{ name: 'Erinle Samuel' }],
      openGraph: {
        title,
        description,
        type: 'article',
        url,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: note.title,
          },
        ],
        publishedTime: publishedDate,
        authors: ['Erinle Samuel'],
        section: 'Technology',
        tags: ['Web Development', 'Programming', 'Tutorial'],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [imageUrl],
        creator: '@your_twitter_handle', // Replace with actual handle
      },
      alternates: {
        canonical: url,
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Note Not Found',
      description: 'The requested note could not be found.',
    };
  }
}

export default async function NotePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  try {
    const note = await getNoteBySlug(slug);

    if (!note) {
      console.log(`Note not found for slug: ${slug}`);
      notFound();
    }

    const formattedDate = new Date(note.dateCreated).toLocaleDateString(
      'en-US',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
    );

    // Generate article structured data
    const articleSchema = generateArticleSchema(
      note.title,
      note.description,
      slug,
      note.dateCreated,
      note.featuredImage?.url,
      [
        'Web Development',
        'Programming',
        'Tutorial',
        note.title.split(' ').slice(0, 2).join(' '),
      ],
    );

    const breadcrumbItems = [
      { name: 'Home', href: '/' },
      { name: 'Notes', href: '/notes' },
      { name: note.title, href: `/notes/${slug}`, current: true },
    ];

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="pt-4">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          <div className="pt-6">
            {note.img && (
              <Image
                src={note.img.url}
                alt={note.img.description || note.title}
                width={1024}
                height={400}
                className="h-40 w-full rounded-xl object-cover"
              />
            )}
          </div>
          <hgroup>
            <h1 className="font-clash pt-10 text-2xl md:text-3xl">
              {note.title}
            </h1>
            <div className="text-primary-900 mt-4 flex items-center text-sm">
              <p>Published on {formattedDate}</p>
            </div>
          </hgroup>
          <article className="prose prose-lg max-w-none">
            <div className="text-primary-900 mt-6 text-lg">
              {note.description && (
                <p className="lead mb-8 text-xl font-medium">
                  {note.description}
                </p>
              )}
              {note.content ? (
                <div>
                  {documentToReactComponents(note.content.json)}
                </div>
              ) : (
                <div>
                  <p>
                    Content for this note is being updated. Please check back
                    soon.
                  </p>
                  <p>In the meantime, you can:</p>
                  <ul className="mt-4 list-disc pl-6">
                    <li>
                      Browse other{' '}
                      <Link
                        href="/notes"
                        className="text-blue-500 hover:underline"
                      >
                        notes
                      </Link>
                    </li>
                    <li>
                      Check out my{' '}
                      <Link
                        href="/projects"
                        className="text-blue-500 hover:underline"
                      >
                        projects
                      </Link>
                    </li>
                    <li>
                      Learn more{' '}
                      <Link href="/" className="text-blue-500 hover:underline">
                        about me
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </article>
          <footer className="mt-10 border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Erinle Samuel. All rights
              reserved.
            </p>
          </footer>
          <div className="mt-36" />
        </div>
      </>
    );
  } catch (error) {
    console.error('Error fetching note:', error);
    notFound();
  }
}
