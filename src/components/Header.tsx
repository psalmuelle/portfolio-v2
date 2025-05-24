import Image from "next/image";
import Link from "next/link";
import logoImg from "../../public/logo.png";
import Icon from "./Icons";

export default function Header() {
  return (
    <header className='w-full max-w-7xl mx-auto flex justify-between items-center p-10 md:p-16 px-6 sm:px-10 lg:px-16'>
      <Link href='/'>
        <Image src={logoImg} alt='logo' width={32} height={32} />
      </Link>

      <nav className='flex items-center gap-4 lg:gap-6'>
        <Link
          href='/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:bg-primary-100 p-2 rounded-full'>
          <Icon name='linkedinLogo' size={24} weight='fill' />
          <span className='sr-only'>LinkedIn</span>
        </Link>

        <Link
          href='https://github.com/psalmuelle'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:bg-primary-100 p-2 rounded-full'>
          <Icon name='githubLogo' size={24} weight='fill' />
          <span className='sr-only'>Github</span>
        </Link>

        <Link
          href='https://x.com/erinle_sam'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:bg-primary-100 p-2 rounded-full'>
          <Icon name='xLogo' size={24} weight='fill' />
          <span className='sr-only'>X</span>
        </Link>
      </nav>
    </header>
  );
}
