"use client";

import { motion, useScroll, useSpring, type Variants } from "framer-motion";
import { CV_DATA } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Mail, MapPin, Award, BookOpen, Briefcase, Code } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { BackgroundGradient } from "@/components/BackgroundGradient";
import { cn } from "@/lib/utils";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const item: Variants = {
  hidden: { y: 30, opacity: 0, filter: "blur(10px)" },
  show: { 
    y: 0, 
    opacity: 1, 
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  hover: { 
    y: -10, 
    scale: 1.02,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-100 origin-left"
        style={{ scaleX }}
      />
      <BackgroundGradient />
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section id="about" className="mb-24">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <motion.div variants={item}>
              <Badge
                variant="outline"
                className="mb-4 py-1.5 px-4 border-emerald-600/40 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-semibold cursor-pointer hover:bg-emerald-500/25 transition-all duration-300 backdrop-blur-sm"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative mr-2 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                </span>
                Open to Work
              </Badge>
            </motion.div>
            <motion.h1 
              variants={item}
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            >
              Building the future of the <span className="text-gradient">Web</span>
            </motion.h1>
            <motion.p 
              variants={item}
              className="text-xl text-muted-foreground mb-8 max-w-2xl"
            >
              Hi, I'm <span className="text-foreground font-semibold">{CV_DATA.name}</span>. 
              {CV_DATA.summary}
            </motion.p>
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                  View My Projects
                </Button>
              </motion.div>
              <div className="flex gap-2">
                {CV_DATA.links.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "outline", size: "icon" }), "rounded-full")}
                  >
                    <link.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-border" />
              <h2 className="text-3xl font-bold flex items-center gap-2">
                <Code className="text-primary" /> Technical Skills
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CV_DATA.skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full glass hover:border-primary/30 transition-all group">
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {skill.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <Badge key={item} variant="secondary" className="bg-secondary/50 font-medium">
                          {item}
                        </Badge>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <Briefcase className="text-primary" /> Featured Projects
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CV_DATA.projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                whileHover="hover"
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className="h-full flex flex-col glass overflow-hidden group border-muted/50 transition-shadow hover:shadow-2xl hover:shadow-primary/10">
                  <div className="h-48 bg-linear-to-br from-primary/10 to-accent-foreground/10 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                       <span className="text-4xl font-bold opacity-20 pointer-events-none">{project.title}</span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex gap-2">
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <Code className="h-5 w-5" />
                        </a>
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <ul className="space-y-2">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="text-sm flex items-start gap-2 text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="outline" className="text-[10px] bg-primary/5 border-primary/20">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <section id="experience">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Briefcase className="text-primary" /> Experience
            </h2>
            <div className="space-y-8 pl-4 border-l-2 border-primary/20">
              {CV_DATA.experience.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[21px] top-1.5 h-4 w-4 rounded-full bg-primary border-4 border-background" />
                  <div className="mb-2">
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-sm flex items-start gap-2 text-muted-foreground">
                        <span className="h-1 w-1 rounded-full bg-muted-foreground mt-2 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="education" className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
                <BookOpen className="text-primary" /> Education
              </h2>
              {CV_DATA.education.map((edu, index) => (
                <Card key={index} className="glass">
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <CardDescription>{edu.school} • {edu.period}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
                <Award className="text-primary" /> Certifications
              </h2>
              {CV_DATA.certifications.map((cert, index) => (
                <Card key={index} className="glass group">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <div>
                      <CardTitle className="text-lg">{cert.name}</CardTitle>
                      <CardDescription>{cert.issuer}</CardDescription>
                    </div>
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary">Score: {cert.score}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <section id="contact" className="py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <h2 className="text-4xl font-bold">Let's work <span className="text-gradient">together</span></h2>
            <p className="text-xl text-muted-foreground">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${CV_DATA.email}`}
                className={cn(buttonVariants({ size: "lg" }), "rounded-full px-12 group shadow-xl shadow-primary/20")}
              >
                Say Hello
                <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <div className="flex gap-4">
                {CV_DATA.links.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-full hover:bg-primary/10 hover:text-primary transition-all")}
                  >
                    <link.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
            <div className="pt-12 text-sm text-muted-foreground flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4" />
              {CV_DATA.location} • {CV_DATA.phone}
            </div>
          </motion.div>
        </section>
      </div>

      <footer className="py-10 border-t border-border/50 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} {CV_DATA.name}. All rights reserved.</p>
      </footer>
    </main>
  );
}
