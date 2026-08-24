'use client';

import { useState } from 'react';
import { contactEmail } from '../data';

export default function CopyButton() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable; no-op.
    }
  };

  return (
    <button
      className="copy-btn"
      onClick={copyEmail}
      type="button"
      data-copied={copied ? '' : undefined}
    >
      <span className="copy-text">Copy</span>
      <span className="copy-swap" aria-hidden="true">
        <span>Copy</span>
        <span>Copied!</span>
      </span>
    </button>
  );
}
