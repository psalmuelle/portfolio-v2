'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import CopyButton from './CopyButton';
import { contactEmail, socialLinks } from '../data';

const mobileItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav" data-open={open ? '' : undefined}>
      <div className="nav-inner">
        <Link className="nav-brand" href="/" onClick={() => setOpen(false)}>
          Erinle Samuel
        </Link>
        <div className="nav-right">
          <span className="nav-status">Software Engineer</span>
          <span className="nav-sep">/</span>
          <a className="nav-email" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
          <CopyButton />
        </div>
        <button
          className="nav-burger"
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            id="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { height: 0, opacity: 0 },
              visible: { height: 'auto', opacity: 1 },
            }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              className="nav-mobile-status"
              variants={mobileItem}
              transition={{ duration: 0.35, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              Software Engineer
            </motion.p>
            <motion.a
              className="nav-mobile-email"
              href={`mailto:${contactEmail}`}
              variants={mobileItem}
              transition={{ duration: 0.35, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {contactEmail}
            </motion.a>
            <motion.div variants={mobileItem} transition={{ duration: 0.35, delay: 0.18 }}>
              <CopyButton />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
