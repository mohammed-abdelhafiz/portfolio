"use client";

import { motion } from "framer-motion";

export const BackgroundGradient = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-background" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 bg-primary rounded-full blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 bg-accent-foreground rounded-full blur-[120px]"
      />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    </div>
  );
};
