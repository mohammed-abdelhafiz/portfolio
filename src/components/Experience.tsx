"use client";

import { motion } from "motion/react";
import { Award, BookOpen, Briefcase, CheckCircle2, ExternalLink } from "lucide-react";
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
    },
  },
} as const;

const leftTimelineVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
} as const;

export function Experience() {
  return (
    <section id="experience" className="border-b bg-card overflow-hidden">
      <motion.div 
        className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:py-20 lg:grid-cols-2 2xl:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Experience Column */}
        <motion.section 
          aria-labelledby="experience-heading" 
          variants={itemVariants}
          className="border bg-background p-6 md:p-8"
        >
          <div className="mb-8 flex items-center gap-3">
            <Briefcase aria-hidden="true" className="size-8 text-primary" />
            <h2 id="experience-heading" className="text-3xl font-bold leading-none">Experience</h2>
          </div>
          <motion.div className="grid gap-8" variants={leftTimelineVariants}>
            {CV_DATA.experience.map((item) => (
              <motion.article 
                key={`${item.company}-${item.role}`} 
                variants={itemVariants}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="border-l-2 border-primary pl-6 origin-left"
              >
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.08em] text-primary">{item.period}</p>
                <h3 className="text-2xl font-semibold leading-tight">{item.role}</h3>
                <p className="mt-2 text-base font-semibold">{item.company}</p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.description}</p>
                <ul className="mt-5 grid gap-3">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        {/* Education & Certifications Column */}
        <motion.section 
          aria-labelledby="education-heading" 
          variants={itemVariants}
          className="grid gap-6"
        >
          {/* Education Box */}
          <div className="border bg-background p-6 md:p-8">
            <div className="mb-8 flex items-center gap-3">
              <BookOpen aria-hidden="true" className="size-8 text-primary" />
              <h2 id="education-heading" className="text-3xl font-bold leading-none">Education</h2>
            </div>
            {CV_DATA.education.map((item) => (
              <article key={item.degree}>
                <h3 className="text-2xl font-semibold leading-tight">{item.degree}</h3>
                <p className="mt-2 text-base font-semibold">{item.school} / {item.period}</p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.details}</p>
              </article>
            ))}
          </div>

          {/* Certifications Box */}
          <div className="border bg-background p-6 md:p-8">
            <div className="mb-8 flex items-center gap-3">
              <Award aria-hidden="true" className="size-8 text-primary" />
              <h2 className="text-3xl font-bold leading-none">Certifications</h2>
            </div>
            <div className="grid gap-6">
              {CV_DATA.certifications.map((cert) => (
                <motion.article 
                  key={cert.name} 
                  whileHover={{ y: -2 }}
                  className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="text-xl font-semibold leading-tight">{cert.name}</h3>
                    <p className="mt-2 text-base text-muted-foreground">{cert.issuer} / Score: {cert.score}</p>
                  </div>
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(buttonVariants({ variant: "outline" }), "rounded-none")}
                  >
                    Verify
                    <ExternalLink data-icon="inline-end" />
                  </motion.a>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>
      </motion.div>
    </section>
  );
}
