"use client";

import { motion } from "motion/react";
import { Mail, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CV_DATA } from "@/lib/constants";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const leftColVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
    },
  },
} as const;

const rightColVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
} as const;

export function Contact() {
  return (
    <section id="contact" className="border-b overflow-hidden">
      <motion.div 
        className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:py-24 lg:grid-cols-[0.8fr_1.2fr] 2xl:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={leftColVariants}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-primary">Contact</p>
          <h2 className="mb-8 text-3xl font-bold leading-none md:text-5xl">Let&apos;s build something clear and durable.</h2>
          <p className="max-w-[65ch] text-base leading-relaxed text-muted-foreground">
            Send a role, project brief, or product problem. I&apos;ll reply with next steps and the technical questions that matter.
          </p>
        </motion.div>
        
        <motion.div className="grid gap-4" variants={rightColVariants}>
          <motion.a 
            href={`mailto:${CV_DATA.email}`} 
            variants={itemVariants}
            whileHover={{ y: -4, borderColor: "var(--color-primary)" }}
            whileTap={{ scale: 0.99 }}
            className="flex min-h-16 items-center gap-4 border bg-card p-4 text-base font-semibold transition-colors duration-200 hover:bg-secondary"
          >
            <Mail aria-hidden="true" className="size-6 text-primary" />
            {CV_DATA.email}
          </motion.a>
          
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -2 }}
            className="flex min-h-16 items-center gap-4 border bg-card p-4 text-base font-semibold"
          >
            <MapPin aria-hidden="true" className="size-6 text-primary" />
            {CV_DATA.location} / {CV_DATA.phone}
          </motion.div>
          
          <motion.div className="flex flex-wrap gap-3 pt-4" variants={itemVariants}>
            {CV_DATA.links.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(buttonVariants({ variant: "outline" }), "rounded-none")}
              >
                <link.icon data-icon="inline-start" />
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
