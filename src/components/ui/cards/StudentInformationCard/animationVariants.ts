export const layoutVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      when: "beforeChildren",
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: "easeInOut",
      when: "afterChildren",
    },
  },
};

export const childVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};
