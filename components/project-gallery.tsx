"use client";

import { useState } from "react";
import { ArrowUpRight, Github, Play, Plus, Trophy } from "lucide-react";
import type { PortfolioProject } from "../data/portfolio";
import ProjectArtwork from "./project-artwork";
import styles from "./project-gallery.module.css";

const categories = ["All work", "AI systems", "Web apps", "Immersive"] as const;

export default function ProjectGallery({ projects }: { projects: PortfolioProject[] }) {
  const [category, setCategory] = useState<string>("All work");
  const visibleProjects = projects.filter((project) => category === "All work" || project.category === category);

  return (
    <section className={`section-frame ${styles.collection}`} aria-labelledby="collection-title">
      <header className={styles.heading}><div><p className={styles.kicker}>Beyond the latest</p><h2 id="collection-title">More from my workbench<span>.</span></h2></div><p>AI systems, web apps, and a little<br />of the worlds beyond the screen.</p></header>
      <div className={styles.filterBar}><div className={styles.filters} role="group" aria-label="Filter projects">{categories.map((item) => <button key={item} aria-pressed={item === category} onClick={() => setCategory(item)} className={item === category ? styles.activeFilter : undefined}>{item}</button>)}</div><span className={styles.resultCount} role="status">{String(visibleProjects.length).padStart(2, "0")} projects</span></div>
      <div className={styles.grid}>
        {visibleProjects.map((project) => (
          <article className={styles.card} key={project.title} id={project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
            <div className={styles.artwork}><ProjectArtwork project={project} />{project.award && <span className={styles.award}><Trophy size={12} />{project.award}</span>}</div>
            <div className={styles.cardBody}>
              <div className={styles.meta}><span>{project.category}</span><span>{project.year}</span></div>
              <h3>{project.title}</h3>
              <p className={styles.description}>{project.summary}</p>
              <div className={styles.tags}>{project.stack.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div>
              <details className={styles.details}><summary>What’s inside <Plus size={15} /></summary><ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></details>
              <div className={styles.cardLinks}><a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}><Github size={15} /> View repository <ArrowUpRight size={14} /></a>{project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"><Play size={13} /> Watch demo</a>}</div>
            </div>
          </article>
        ))}
        {category === "All work" && <a className={styles.githubCard} href="https://github.com/SuMyatMyatHtay" target="_blank" rel="noopener noreferrer"><div className={styles.githubOrb}><Github size={40} strokeWidth={1.3} /></div><p className={styles.kicker}>Always making something</p><h3>There’s more<br />in the repos.</h3><p>Experiments, prototypes, and the projects<br />that helped me learn along the way.</p><span>Explore my GitHub <ArrowUpRight size={18} /></span></a>}
      </div>
    </section>
  );
}
