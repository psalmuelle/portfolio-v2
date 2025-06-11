'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-[8%] left-1/2 flex w-fit -translate-x-1/2 transform items-center justify-center rounded-xl bg-white p-1.5 text-sm text-neutral-600 drop-shadow-xl">
      <Link
        className={`rounded-lg px-4 py-2 ${
          pathname === '/' ? 'bg-primary-300 text-black' : ''
        }`}
        href={'/'}
      >
        Home
      </Link>

      <Link
        className={`rounded-lg px-4 py-2 ${
          pathname === '/projects' ? 'bg-primary-300 text-black' : ''
        }`}
        href={'/projects'}
      >
        Projects
      </Link>

      <Link
        className={`rounded-lg px-4 py-2 ${
          pathname === '/notes' ? 'bg-primary-300 text-black' : ''
        }`}
        href={'/notes'}
      >
        Notes
      </Link>

      <Link
        className={`rounded-lg px-5 py-1 text-lg ${
          pathname === '/' ? 'bg-primary-300 text-black' : ''
        }`}
        href="/"
      >
        🎯
        <span className="sr-only">X</span>
      </Link>
    </nav>
  );
}
