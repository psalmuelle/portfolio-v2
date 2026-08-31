'use client';

import { useRef, type ReactNode, type Ref } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section';
  delay?: number;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Reveal({ children, className = '', as = 'div', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-12% 0px -12% 0px' });
  const prefersReducedMotion = useReducedMotion();
  const visible = prefersReducedMotion || inView;
  const motionProps = {
    className,
    initial: prefersReducedMotion ? false : { opacity: 0, y: 28, filter: 'blur(10px)' },
    animate: visible ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined,
    transition: { duration: 0.9, ease: EASE, delay },
    children,
  };

  if (as === 'section') {
    return <motion.section ref={ref as Ref<HTMLElement>} {...motionProps} />;
  }

  return <motion.div ref={ref as Ref<HTMLDivElement>} {...motionProps} />;
}
