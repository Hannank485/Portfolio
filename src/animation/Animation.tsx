import { type Variants } from "motion";

export const parentStagger: Variants = {
  hidden: { opacity: 1 },
  visible: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};
export const fadeInOut: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {},
  },
  exit: {},
};

export const FadeIn: Variants = {
  initial: {
    opacity: 0,
    x: 4,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};
export const FadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const ButtonAnim: Variants = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.94 },
};
