import type { Metadata } from 'next';
import Header from '@/components/Header';
import MenuBar from '@/components/MenuBar';
import localFont from 'next/font/local';
import './globals.css';

const lufgaFonts = localFont({
  src: [
    {
      path: '../../public/fonts/LufgaLight.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/LufgaRegular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/LufgaItalic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/LufgaMedium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/LufgaSemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/LufgaBold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/LufgaExtraBold.woff',
      weight: '800',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://erinlesam.com'), // Replace with your actual domain
  title: {
    default: 'Erinle Sam - Frontend Engineer',
    template: '%s | Erinle Sam',
  },
  description:
    'Frontend Engineer specializing in React.js, Next.js, and React Native. Building sleek, user-friendly interfaces with modern web technologies.',
  keywords: [
    'Frontend Engineer',
    'React Developer',
    'Next.js',
    'React Native',
    'JavaScript',
    'TypeScript',
    'Web Development',
    'Mobile Development',
    'UI/UX',
    'Portfolio',
  ],
  authors: [{ name: 'Erinle Samuel', url: 'https://erinlesam.com' }],
  creator: 'Erinle Samuel',
  publisher: 'Erinle Samuel',
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://erinlesam.com',
    siteName: 'Erinle Sam Portfolio',
    title: 'Erinle Sam - Frontend Engineer',
    description:
      'Frontend Engineer specializing in React.js, Next.js, and React Native. Building sleek, user-friendly interfaces with modern web technologies.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Erinle Sam - Frontend Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Erinle Sam - Frontend Engineer',
    description:
      'Frontend Engineer specializing in React.js, Next.js, and React Native. Building sleek, user-friendly interfaces.',
    images: ['/opengraph-image.png'],
    creator: '@your_twitter_handle', // Replace with actual Twitter handle
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://erinlesam.com',
  },
  category: 'technology',
  other: {
    'theme-color': '#16423c',
    'color-scheme': 'light',
    'twitter:image': '/opengraph-image.png',
    'twitter:card': 'summary_large_image',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lufgaFonts.className} antialiased`}>
        <Header />
        {children}
        <MenuBar />
      </body>
    </html>
  );
}
