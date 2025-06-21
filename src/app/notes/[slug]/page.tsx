import Icon from '@/components/Icons';
import Image from 'next/image';
// import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Title of the Note',
};

export default async function NotePage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      {/* <Head>
        <title>{post.title} | My Blog</title>
        <meta name="description" content={post.summary} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://yourdomain.com/blog/${post.slug}`}
        />
      </Head> */}

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="pt-6">
          <Image
            src={`https://images.ctfassets.net/f1pjbpw1fgkh/1p9YYW0cEChbeSesFVsVxJ/6216258e9482f282225dbf7fc87e3cc5/Screenshot_2025-06-15_225831.png`}
            alt={`Image for ${params.slug}`}
            width={1024}
            height={400}
            className="h-40 w-full rounded-xl object-cover"
          />
        </div>
        <hgroup>
          <h1 className="font-clash pt-10 text-2xl md:text-3xl">
            How to Build a Blog with Next.js And Make it Rank on Google
          </h1>
          <div className="text-primary-900 mt-4 flex items-center text-sm">
            <p>2 min read</p>
            <span>
              <Icon name="dot" size={28} weight="bold" />
            </span>
            <p>June 12, 2025</p>
          </div>
        </hgroup>
        <article className="">
          <p className="text-primary-900 mt-6 text-lg">
            In this guide, we will walk you through the process of building a
            blog using Next.js, a powerful React framework that enables
            server-side rendering and static site generation. By the end of this
            tutorial, you will have a fully functional blog that is optimized
            for search engines.
          </p>
          <p className="text-primary-900 mt-6 text-lg">
            We will cover the following topics:
          </p>
          <ul className="text-primary-900 mt-4 list-disc pl-6 text-lg">
            <li>Setting up a Next.js project</li>
            <li>Creating blog posts with Markdown</li>
            <li>Implementing server-side rendering for SEO</li>
            <li>Styling your blog with Tailwind CSS</li>
            <li>Deploying your blog to Vercel</li>
          </ul>
          <p className="text-primary-900 mt-6 text-lg">
            By the end of this guide, you will have a solid understanding of how
            to build a blog with Next.js and make it rank on Google. Let's get
            started!
          </p>
          <p className="text-primary-900 mt-6 text-lg">
            If you have any questions or need further assistance, feel free to
            reach out to us on our{' '}
            <a
              href="https://discord.gg/your-discord-link"
              className="text-blue-500 hover:underline"
            >
              Discord server
            </a>{' '}
            or check out our{' '}
            <a
              href="https://your-website.com"
              className="text-blue-500 hover:underline"
            >
              website
            </a>
            .
          </p>
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
}
