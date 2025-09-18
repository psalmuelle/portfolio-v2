import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Hobbies',
  description:
    'Discover my passion for health tech innovation and hardware development. Coming soon: videos and articles documenting my journey in building healthcare solutions and experimental hardware projects.',
  keywords: [
    'health tech',
    'healthcare technology',
    'hardware development',
    'medical devices',
    'health innovation',
    'biomedical engineering',
    'wearable tech',
    'IoT health devices',
    'health monitoring',
    'medical hardware',
    'health tech blog',
  ],
  authors: [{ name: 'Erinle Samuel' }],
  openGraph: {
    title: 'Hobbies & Innovations | Erinle Sam',
    description:
      'Exploring health tech and hardware development. Coming soon: videos and articles on healthcare innovation and experimental projects.',
    type: 'website',
    url: 'https://erinlesam.com/hobbies',
    images: [
      {
        url: '/hobbies-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Erinle Sam Health Tech and Hardware Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health Tech & Hardware Development | Erinle Sam',
    description:
      'Exploring healthcare innovation and experimental hardware projects.',
    images: ['/hobbies-og-image.png'],
  },
  alternates: {
    canonical: 'https://erinlesam.com/hobbies',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HobbiesPage() {
  // Generate structured data for hobbies/interests
  const hobbiesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Erinle Samuel',
    url: 'https://erinlesam.com',
    jobTitle: 'Software Developer',
    knowsAbout: [
      'Health Technology',
      'Healthcare Innovation',
      'Hardware Development',
      'Medical Devices',
      'Biomedical Engineering',
      'Wearable Technology',
      'IoT Health Devices',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Software Developer',
      occupationLocation: {
        '@type': 'Place',
        name: 'Nigeria',
      },
    },
    sameAs: [
      'https://github.com/psalmuelle',
      'https://linkedin.com/in/erinlesam',
    ],
  };

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Hobbies', href: '/hobbies', current: true },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hobbiesSchema) }}
      />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="pt-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <hgroup>
          <h1 className="font-clash pt-6 text-2xl underline underline-offset-3 md:text-3xl">
            Hobbies & Interests
          </h1>

          <p className="mt-4 text-sm md:text-base">
            Beyond software development, I&apos;m passionate about healthcare
            innovation and experimental hardware projects.
          </p>
        </hgroup>

        <div className="mt-4 mb-36 md:mt-6">
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div>
                <p className="mt-4 text-gray-700">
                  My hobbies include working on health tech and building random
                  hardware. I plan to post videos and articles on what I&apos;m
                  doing.
                </p>
              </div>

              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="text-primary-900 text-lg font-medium">
                  📺 Coming Soon
                </h3>
                <p className="text-primary-800 mt-2">
                  Videos and articles documenting my health tech projects and
                  hardware builds.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-600">
                Want to collaborate on health tech or hardware projects?{' '}
                <a
                  href="mailto:psalmuelle1@gmail.com"
                  className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-2"
                >
                  Let&apos;s connect
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
