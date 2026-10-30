export const TRANSITIONS = {
  // Smooth luxury cubic bezier (Apple / award-winning style)
  luxury: [0.22, 1, 0.36, 1] as const,
  // Snappy modern bezier
  snappy: [0.16, 1, 0.3, 1] as const,
  // Energetic overshoot
  pop: [0.34, 1.56, 0.64, 1] as const,
  // Gentle ease in-out
  smooth: [0.65, 0, 0.35, 1] as const,
};

export const SPRINGS = {
  tactile: { type: "spring", stiffness: 450, damping: 30 } as const,
  gentle: { type: "spring", stiffness: 220, damping: 24 } as const,
  bouncy: { type: "spring", stiffness: 380, damping: 22 } as const,
  snappy: { type: "spring", stiffness: 500, damping: 35 } as const,
};

export const VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: TRANSITIONS.luxury },
    },
  },
  fadeInScale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: TRANSITIONS.luxury },
    },
  },
  clipReveal: {
    hidden: { clipPath: "inset(0% 0% 100% 0%)", opacity: 0 },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      transition: { duration: 0.8, ease: TRANSITIONS.snappy },
    },
  },
  staggerContainer: (staggerChildren = 0.08, delayChildren = 0.1) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  }),
};
