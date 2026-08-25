'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [height, setHeight] = useState(0);

  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, {
    stiffness: 48,
    damping: 18,
    mass: 0.95,
    restDelta: 0.0001,
  });
  const y = useTransform(smoothY, (value) => -value);

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine) and (min-width: 810px)');
    const update = () => setEnabled(!prefersReducedMotion && media.matches);

    const frame = requestAnimationFrame(update);
    media.addEventListener('change', update);
    return () => {
      cancelAnimationFrame(frame);
      media.removeEventListener('change', update);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!enabled || !contentRef.current) return;

    const updateHeight = () => {
      if (contentRef.current) {
        setHeight(contentRef.current.getBoundingClientRect().height);
      }
    };

    const frame = requestAnimationFrame(updateHeight);
    const observer = new ResizeObserver(updateHeight);
    observer.observe(contentRef.current);
    window.addEventListener('resize', updateHeight);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, [enabled]);

  if (!enabled) {
    return children;
  }

  return (
    <>
      <motion.div ref={contentRef} className="smooth-scroll-content" style={{ y }}>
        {children}
      </motion.div>
      <div className="smooth-scroll-spacer" style={{ height }} aria-hidden="true" />
    </>
  );
}
