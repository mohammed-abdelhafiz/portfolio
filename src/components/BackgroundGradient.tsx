"use client";

import { motion } from "framer-motion";

export const BackgroundGradient = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-background" />
      <motion.div
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 bg-primary rounded-full blur-[120px] opacity-[0.15]"
      />
      <motion.div
        animate={{ 
          x: [0, -50, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 bg-accent-foreground rounded-full blur-[120px] opacity-[0.1]"
      />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    </div>
  );
};
