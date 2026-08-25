'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  distance?: number;
}

export default function Parallax({ children, className = '', distance = 40 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.4,
  });

  const y = useTransform(smooth, [0, 1], prefersReducedMotion ? [0, 0] : [distance, -distance]);

  return (
    <motion.div ref={ref} className={className} style={{ position: 'relative', y }}>
      {children}
    </motion.div>
  );
}
