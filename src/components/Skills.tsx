"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CV_DATA } from "@/lib/constants";

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
} as const;

export function Skills() {
  const topSkills = CV_DATA.skills;

  return (
    <section id="skills" className="border-b bg-card overflow-hidden">
      <motion.div 
        className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:py-20 lg:grid-cols-[0.8fr_1.2fr] 2xl:px-0"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={leftColVariants}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-primary">Technical range</p>
          <h2 className="mb-8 text-3xl font-bold leading-none md:text-5xl">A practical stack for modern product work.</h2>
          <p className="max-w-[65ch] text-base leading-relaxed text-muted-foreground">
            The stack is selected around maintainability: typed UI, predictable state, validated APIs, and data models that can grow.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid gap-4 sm:grid-cols-2"
          variants={cardContainerVariants}
        >
          {topSkills.map((skill) => (
            <motion.div
              key={skill.category}
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: "var(--color-primary)" }}
              className="rounded-none border bg-background shadow-none transition-colors duration-200"
            >
              <Card className="rounded-none border-none shadow-none bg-transparent">
                <CardHeader>
                  <h3 className="text-xl font-semibold leading-tight">{skill.category}</h3>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <Badge variant="outline" className="rounded-none text-sm cursor-default">
                        {item}
                      </Badge>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
