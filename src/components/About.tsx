"use client";

import Image from "next/image";
import {
  ArrowRight,
  Award,
  Code2,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { CV_DATA } from "@/lib/constants";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
} as const;

export function About() {
  return (
    <section id="about" className="overflow-hidden border-b">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:py-24 lg:grid-cols-12 lg:py-28 2xl:px-0">
        <motion.div 
          className="lg:col-span-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="secondary" className="mb-8 rounded-none px-3 py-1 text-sm font-semibold">
              Open to work
            </Badge>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants} 
            className="mb-8 max-w-5xl text-4xl font-bold leading-none tracking-normal text-foreground md:text-5xl lg:text-7xl"
          >
            Mohamed Abdelhafiz builds production-ready web products.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            className="max-w-[70ch] text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            {CV_DATA.summary} I build sharp interfaces, resilient APIs, and clear product flows from idea to deployment.
          </motion.p>
          
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(buttonVariants(), "rounded-none")}
            >
              View projects
              <ArrowRight data-icon="inline-end" />
            </motion.a>
            <motion.a 
              href={CV_DATA.cvUrl} 
              download 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(buttonVariants({ variant: "outline" }), "rounded-none")}
            >
              <Download data-icon="inline-start" />
              Download CV
            </motion.a>
            <motion.a 
              href={`mailto:${CV_DATA.email}`} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(buttonVariants({ variant: "outline" }), "rounded-none")}
            >
              <Mail data-icon="inline-start" />
              Contact
            </motion.a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { icon: MapPin, label: "Based in", value: CV_DATA.location },
              { icon: GraduationCap, label: "Education", value: "Benha CS graduate" },
              { icon: Award, label: "NTI score", value: "85%" },
            ].map((item) => (
              <motion.div 
                key={item.label} 
                whileHover={{ y: -4, borderColor: "var(--color-primary)" }}
                className="border bg-card p-4 transition-colors duration-200"
              >
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-primary">
                  <item.icon aria-hidden="true" className="size-4" />
                  {item.label}
                </div>
                <p className="text-lg font-semibold leading-tight">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeInOut" } }
            }}
            className="my-10 h-px w-full bg-border origin-left" 
          />

          <motion.div variants={itemVariants} className="grid gap-8 md:grid-cols-2">
            <article className="flex flex-col items-start gap-4">
              <Code2 aria-hidden="true" className="size-8 text-primary" />
              <div>
                <h2 className="mb-3 text-2xl font-semibold leading-tight">Ship full-stack features</h2>
                <p className="max-w-[60ch] text-base leading-relaxed text-muted-foreground">
                  I build typed React and Next.js frontends connected to structured Node, Express, MongoDB, and Convex backends.
                </p>
              </div>
            </article>

            <article className="flex flex-col items-start gap-4">
              <ShieldCheck aria-hidden="true" className="size-8 text-primary" />
              <div>
                <h2 className="mb-3 text-2xl font-semibold leading-tight">Keep systems dependable</h2>
                <p className="max-w-[60ch] text-base leading-relaxed text-muted-foreground">
                  I care about validation, auth, database indexing, optimistic states, and recoverable user flows.
                </p>
              </div>
              <motion.a 
                href={`mailto:${CV_DATA.email}`} 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(buttonVariants({ variant: "outline" }), "rounded-none")}
              >
                <Mail data-icon="inline-start" />
                Start a conversation
              </motion.a>
            </article>
          </motion.div>
        </motion.div>

        <motion.aside 
          className="lg:col-span-4"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative min-h-[520px] overflow-hidden border bg-card md:min-h-[680px] lg:h-full lg:min-h-[620px]">
            <Image
              src="/mohamed-hero-portrait.png"
              alt="Professional portrait of Mohamed Abdelhafiz"
              fill
              priority
              sizes="(min-width: 1280px) 420px, (min-width: 1024px) 33vw, 100vw"
              className="object-cover object-[50%_34%]"
            />
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
