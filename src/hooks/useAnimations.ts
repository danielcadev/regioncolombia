"use client"
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, AnimationControls } from 'framer-motion';

export function useAnimations(): [any, AnimationControls] {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return [ref, controls];
}