import type { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
};

export const slideLeft: Variants = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: -0.1 },
};

export const dropTop: Variants = {
  initial: { opacity: 0, y: -250 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
    },
  },
};

export const floating: Variants = {
  initial: {},
  animate: {
    y: [20, 0, 20],
    transition: { duration: 1.5, repeat: Infinity },
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.25,
    },
  },
};
