"use client";

import { motion, Variants } from "framer-motion";

interface BlurFadeProps {
  delay?: number;
  children?: React.ReactNode;
}

export default function BlurFade({ delay = 0, children }: BlurFadeProps) {
  const variants: Variants = {
    hidden: { y: 6, opacity: 0, filter: "blur(6px)" },
    visible: { y: -6, opacity: 1, filter: "blur(0px)" },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{
        delay: 0.08 + delay,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
