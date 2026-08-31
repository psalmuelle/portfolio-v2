import type { Metadata } from 'next';
import { Fraunces, Public_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';
import './globals.css';

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://erinlesam.com',
);

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-public-sans',
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: 'Erinle Samuel — Software Engineer',
    template: '%s | Erinle Samuel',
  },
  description:
    'Portfolio of Erinle Samuel, a software engineer building reliable web and mobile applications across frontend and backend systems.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Erinle Samuel',
    title: 'Erinle Samuel — Software Engineer',
    description:
      'Software engineer building reliable web and mobile applications across frontend and backend systems.',
  },
  twitter: {
    card: 'summary',
    title: 'Erinle Samuel — Software Engineer',
    description:
      'Software engineer building reliable web and mobile applications across frontend and backend systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${publicSans.variable}`}>
      <body>
        <ScrollProgress />
        <Navbar />
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
