import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description:
    'The page you are looking for could not be found. Return to the homepage or explore other sections of the portfolio.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: '404 - Not Found', href: '/404', current: true },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
      <div className="pt-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <div className="mt-16 flex min-h-[60vh] flex-col items-center justify-center text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="font-clash text-primary-300 text-8xl md:text-9xl">
            404
          </h1>
        </div>

        {/* Error Heading */}
        <hgroup className="mb-8">
          <h2 className="font-clash text-primary-900 text-2xl md:text-3xl">
            Page Not Found
          </h2>
          <p className="mt-4 text-base text-gray-600 md:text-lg">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </hgroup>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="bg-primary-900 hover:bg-primary-600 focus:ring-primary-500 rounded-xl px-4 py-2 text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            Back to Home
          </Link>

          <Link
            href="/projects"
            className="border-primary-900 text-primary-900 hover:bg-primary-100 focus:ring-primary-500 rounded-xl border px-4 py-2 transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            View Projects
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">
            Here are some helpful links instead:
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            <Link
              href="/projects"
              className="hover:border-primary-300 hover:bg-primary-50 rounded-lg border border-gray-200 p-4 transition-colors"
            >
              <h3 className="text-primary-900 font-semibold">Projects</h3>
              <p className="mt-1 text-sm text-gray-600">
                View my latest work and applications
              </p>
            </Link>

            <Link
              href="/notes"
              className="hover:border-primary-300 hover:bg-primary-50 rounded-lg border border-gray-200 p-4 transition-colors"
            >
              <h3 className="text-primary-900 font-semibold">Notes</h3>
              <p className="mt-1 text-sm text-gray-600">
                Read development insights and tips
              </p>
            </Link>

            <Link
              href="/#contact"
              className="hover:border-primary-300 hover:bg-primary-50 rounded-lg border border-gray-200 p-4 transition-colors"
            >
              <h3 className="text-primary-900 font-semibold">Contact</h3>
              <p className="mt-1 text-sm text-gray-600">
                Get in touch for collaborations
              </p>
            </Link>

            <Link
              href="/#hobbies"
              className="hover:border-primary-300 hover:bg-primary-50 rounded-lg border border-gray-200 p-4 transition-colors"
            >
              <h3 className="text-primary-900 font-semibold">Hobbies</h3>
              <p className="mt-1 text-sm text-gray-600">
                Explore my interests and activities
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom spacing for mobile menu */}
      <div className="mb-36" />
    </div>
  );
}
