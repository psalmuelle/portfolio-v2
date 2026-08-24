import CopyButton from './CopyButton';
import { contactEmail, socialLinks } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h4>Milo Ferris</h4>
          <p>Open to full-time and contract work</p>
        </div>
        <div className="footer-email">
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <CopyButton />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
          {socialLinks.map((s, i) => (
            <span key={s.label} style={{ display: 'contents' }}>
              {i > 0 && <span className="meta-sep">/</span>}
              <a href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            </span>
          ))}
        </div>
        <p className="footer-copy">© 2026 Milo Ferris</p>
      </div>
    </footer>
  );
}
