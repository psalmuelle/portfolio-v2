"use client";

import { useState } from "react";
import Icon from "../Icons";

export default function ProjectSection() {
  const [toggleSection, setToggleSection] = useState(false);
  return (
    <section className='border-y border-primary-900 py-6'>
      <h2
        onClick={() => setToggleSection(!toggleSection)}
        className='py-0.5 flex items-center text-xl max-sm:text-lg font-medium gap-1 cursor-pointer'>
        <Icon
          name='caretRight'
          color='#16423c'
          weight='bold'
          className={`transition-transform duration-300 ${
            toggleSection ? "rotate-90" : ""
          }`}
          size={20}
        />
        <span>Projects: Web</span>
      </h2>
      <div className={``}></div>
    </section>
  );
}
