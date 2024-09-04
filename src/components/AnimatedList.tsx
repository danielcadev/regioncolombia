"use client"
import { motion } from 'framer-motion';
import { useAnimations } from '@/hooks/useAnimations';

interface AnimatedListProps {
  items: string[];
}

export function AnimatedList({ items }: AnimatedListProps) {
  const [ref, controls] = useAnimations();

  return (
    <motion.ul
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: {},
      }}
      className="list-disc pl-5"
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          className="mb-2"
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}