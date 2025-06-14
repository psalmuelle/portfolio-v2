import Link from 'next/link';
import Icon from './Icons';

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between p-10 px-6 sm:px-10 md:p-14 lg:px-14">
      <Link href="/" className="text-3xl">
        💼
        <span className="sr-only">Erinle Samuel</span>
      </Link>

      <nav className="flex items-center gap-4 lg:gap-6">
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-primary-100 rounded-full p-2"
        >
          <Icon name="linkedinLogo" size={24} weight="fill" />
          <span className="sr-only">LinkedIn</span>
        </Link>

        <Link
          href="https://github.com/psalmuelle"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-primary-100 rounded-full p-2"
        >
          <Icon name="githubLogo" size={24} weight="fill" />
          <span className="sr-only">Github</span>
        </Link>

        <Link
          href="https://x.com/erinle_sam"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-primary-100 rounded-full p-2"
        >
          <Icon name="xLogo" size={24} weight="fill" />
          <span className="sr-only">X</span>
        </Link>
      </nav>
    </header>
  );
}
