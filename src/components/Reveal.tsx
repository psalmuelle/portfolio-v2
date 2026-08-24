'use client';

import { useMemo, useRef, type ElementType, type ReactNode } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Reveal({ children, className = '', as = 'div', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-12% 0px -12% 0px' });
  const prefersReducedMotion = useReducedMotion();

  const MotionTag = useMemo(() => motion.create(as as ElementType), [as]);

  const visible = prefersReducedMotion || inView;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      animate={visible ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}
