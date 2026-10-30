"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { TRANSITIONS } from "@/lib/motion";

interface MaskedImageProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function MaskedImage({
  children,
  className = "",
  delay = 0,
}: MaskedImageProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ clipPath: "inset(12% 0% 12% 0% round 2.5rem)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 2.5rem)", opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: TRANSITIONS.luxury,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
