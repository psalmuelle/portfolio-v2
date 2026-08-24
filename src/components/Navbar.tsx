import Link from 'next/link';
import CopyButton from './CopyButton';
import { contactEmail } from '../data';

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link className="nav-brand" href="/">
          Milo Ferris
        </Link>
        <div className="nav-right">
          <span className="nav-status">Open to full-time and contract work</span>
          <span className="nav-sep">/</span>
          <a className="nav-email" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
          <CopyButton />
        </div>
        <button className="nav-burger" type="button" aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
