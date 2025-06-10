'use client';

import { useState } from 'react';
import Icon from '../Icons';

export default function ProjectSection() {
  const [toggleSection, setToggleSection] = useState(false);
  return (
    <section className="border-primary-900 border-y py-6 md:py-8">
      <h2
        onClick={() => setToggleSection(!toggleSection)}
        className="flex cursor-pointer items-center gap-1 py-0.5 text-xl font-medium max-sm:text-lg"
      >
        <Icon
          name="caretRight"
          color="#16423c"
          weight="bold"
          className={`transition-transform duration-300 ${
            toggleSection ? 'rotate-90' : ''
          }`}
          size={20}
        />
        <span>Projects: Web</span>
      </h2>
      <div className={``}></div>
    </section>
  );
}
