"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, Code2, Cpu, Sparkles } from "lucide-react";
import Link from "next/link";
import PageShell from "../components/page-shell";
import AnimatedSection from "../components/animated-section";
import StoryTree from "../components/story-tree";
import { projects, storyItems } from "../data/portfolio";

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);

  return (
    <PageShell>
      <section className="section-frame hero-grid">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }} className="status-pill">
            <span className="status-dot" /> Singapore-based · building with AI & software
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.06 }}>
            <h1 className="hero-title">Hi, I&apos;m <span className="gradient-text">Su Myat Myat Htay.</span></h1>
            <p className="hero-alias">But most people know me as <strong>Sera</strong>.</p>
            <h2 className="hero-tagline">I build systems that feel <span className="scribble">alive.</span></h2>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.14 }} className="hero-lede">
            I study Software Engineering at SMU and build AI tools and software that turn ideas into useful products.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.22 }} className="hero-actions">
            <Link className="primary-button" href="/projects">Explore my work <ArrowRight size={17} /></Link>
            <a className="ghost-button" href="#my-story">Meet the human behind it</a>
          </motion.div>

        </div>

        <motion.div initial={{ opacity: 0, scale: 0.92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }} className="hero-visual">
          <div className="portrait-card">
            <div className="portrait-halo" />
            <div className="portrait-core">
              <div className="portrait-photo-wrap">
                <img src="/profile-light.jpg" alt="Sera" className="portrait-photo portrait-photo-light" onError={(event) => { event.currentTarget.style.display = "none"; }} />
                <img src="/profile-dark.jpg" alt="Sera" className="portrait-photo portrait-photo-dark" onError={(event) => { event.currentTarget.style.display = "none"; }} />
                <div className="portrait-photo-placeholder">Add your light + dark portraits</div>
              </div>
              <p>software + ai + product</p>
            </div>
            <motion.div animate={{ y: [0, -8, 0], rotate: [-4, 2, -4] }} transition={{ duration: 4, repeat: Infinity }} className="float-chip chip-code"><Code2 size={18} /> build()</motion.div>
            <motion.div animate={{ y: [0, 10, 0], rotate: [4, -2, 4] }} transition={{ duration: 5, repeat: Infinity }} className="float-chip chip-ai"><Cpu size={18} /> agents</motion.div>
            <motion.div animate={{ y: [0, -6, 0], rotate: [2, 5, 2] }} transition={{ duration: 4.6, repeat: Infinity }} className="float-chip chip-win"><Award size={18} /> hackathons</motion.div>
            <Sparkles className="portrait-sparkle sparkle-a" />
            <Sparkles className="portrait-sparkle sparkle-b" />
          </div>
        </motion.div>
      </section>


      <AnimatedSection className="section-frame story-world-section" id="my-story">
        <div className="story-world-heading">
          <div>
            <p className="eyebrow">My little world</p>
            <h2>Pick a branch and meet a different side of me.</h2>
          </div>
          <p>My story is tucked into this little tree. Hover a branch to light it up, then open a hanging memory to see the photo and story behind it.</p>
        </div>
        <StoryTree items={storyItems} />
      </AnimatedSection>

      <AnimatedSection className="section-frame home-work-section">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">Selected work</p><h2>A glimpse of what I build.</h2></div>
          <Link href="/projects" className="text-link">All projects <ArrowRight size={15} /></Link>
        </div>
        <div className="work-preview-grid">
          {featured.map((project) => (
            <article key={project.title} className="work-preview">
              <p className="eyebrow">{project.year}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <Link href={`/projects#${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="project-link">Project details <ArrowRight size={15} /></Link>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-frame explore-section">
        <div className="section-heading"><p className="eyebrow">More details</p><h2>Explore my professional journey.</h2></div>
        <div className="chapter-grid">
          {[
            ["01", "Education", "Qualifications and areas of study.", "/education"],
            ["02", "Experience", "Work responsibilities and campus roles.", "/experience"],
            ["03", "Projects", "Technical decisions, highlights and tools.", "/projects"],
          ].map(([number, title, body, href]) => (
            <Link href={href} key={title} className="chapter-card"><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div><ArrowRight size={20} /></Link>
          ))}
        </div>
      </AnimatedSection>
    </PageShell>
  );
}
