import type { Metadata } from 'next';
import Header from '@/components/Header';
import MenuBar from '@/components/MenuBar';
import localFont from 'next/font/local';
import './globals.css';
import ApolloWrapper from '@/components/ApolloWrapper';

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
  title: 'Erinle Sam',
  description: 'Frontend Engineer | React.js & React Native',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lufgaFonts.className} antialiased`}>
        <ApolloWrapper>
          <Header />
          {children}
          <MenuBar />
        </ApolloWrapper>
      </body>
    </html>
  );
}
