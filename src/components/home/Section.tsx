'use client';
import { useEffect, useState, useRef, ReactNode } from 'react';
import Icon from '../Icons';

interface SectionProps {
  title: string;
  children?: ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  const [toggleSection, setToggleSection] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');
  const [duration, setDuration] = useState(250);

  useEffect(() => {
    if (contentRef.current == null) return;
    const contentHeight = contentRef.current.scrollHeight;

    const calculatedDuration = Math.min(
      Math.max(200, (contentHeight / 200) * 250),
      600,
    );
    setDuration(calculatedDuration);

    setHeight(toggleSection ? `${contentHeight}px` : '0px');
  }, [toggleSection, contentRef]);
  return (
    <section className="border-primary-900 border-b py-6 md:py-8">
      <h2
        onClick={() => setToggleSection(!toggleSection)}
        className="flex cursor-pointer items-center gap-1 py-0.5 text-lg font-medium sm:text-xl"
      >
        <Icon
          name="caretRight"
          color="#1c1c1c"
          weight="bold"
          className={`transition-transform ease-linear ${
            toggleSection ? 'rotate-90' : ''
          }`}
          style={{ transitionDuration: `${duration}ms` }}
          size={20}
        />
        <span>{title}</span>
      </h2>
      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          transitionDuration: `${duration}ms`,
        }}
        className={`overflow-hidden transition-all ease-linear`}
      >
        {children}
      </div>
    </section>
  );
}
