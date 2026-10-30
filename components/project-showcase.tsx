"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Globe, Maximize2, Trophy } from "lucide-react";
import type { PortfolioProject } from "../data/portfolio";
import styles from "./project-showcase.module.css";

export default function ProjectShowcase({ project }: { project: PortfolioProject }) {
  const [screenWidth, setScreenWidth] = useState(0);
  const [copied, setCopied] = useState("");
  const [copyMessage, setCopyMessage] = useState("");
  const screen = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!screen.current) return;
    const observer = new ResizeObserver(([entry]) => setScreenWidth(entry.contentRect.width));
    observer.observe(screen.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(""), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copy = async (label: string, value: string) => {
    try { await navigator.clipboard.writeText(value); setCopied(label); setCopyMessage(`${label} copied.`); }
    catch { setCopyMessage(`Please select and copy the ${label.toLowerCase()} below.`); }
  };

  return (
    <section className={`section-frame ${styles.showcase}`} aria-label="Project showcase">
      <header className={styles.pageHeading}>
        <div><p className={styles.kicker}>The project collection</p><h1>A few things I’ve built<span>.</span></h1></div>
        <a className={styles.githubProfile} href="https://github.com/SuMyatMyatHtay" target="_blank" rel="noopener noreferrer" aria-label="My GitHub profile"><Github size={17} /> My GitHub <ArrowUpRight size={15} /></a>
      </header>
      <div className={styles.feature}>
        <div className={styles.projectInfo} id={project.liveUrl ? project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") : undefined}>
          <p className={styles.featureLabel}><span className={styles.statusDot} />Most recent project<span className={styles.year}>{project.year}</span></p>
          <div aria-live="polite" aria-atomic="true"><h2>{project.title}</h2><p className={styles.subtitle}>{project.subtitle}</p></div>
          <p className={styles.summary}>{project.summary}</p>
          {project.contribution && <details className={styles.contribution}><summary>My contribution</summary><p>{project.contribution}</p></details>}
          {project.award && <p className={styles.award}><Trophy size={14} />{project.award}</p>}
          <div className={styles.tags}>{project.stack.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div>
          <div className={styles.links}>
            {project.liveUrl && <a className={styles.primaryLink} href={project.liveUrl} target="_blank" rel="noopener noreferrer">Try the live app <ArrowUpRight size={16} /></a>}
            {project.githubUrl && <a className={styles.sourceLink} href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github size={16} /> View code <ArrowUpRight size={14} /></a>}
          </div>
          {project.demoAccount ? (
            <div className={styles.demoAccount}>
              <div className={styles.demoHeading}><span>You can use our test account</span><span className={styles.demoBadge}>Try it out</span></div>
              <div className={styles.credential}><div><span>Email</span><code>{project.demoAccount.email}</code></div><button onClick={() => copy("Email", project.demoAccount!.email)} aria-label="Copy test email">{copied === "Email" ? <Check size={15} /> : <Copy size={15} />}</button></div>
              <div className={styles.credential}><div><span>Password</span><code>{project.demoAccount.password}</code></div><button onClick={() => copy("Password", project.demoAccount!.password)} aria-label="Copy test password">{copied === "Password" ? <Check size={15} /> : <Copy size={15} />}</button></div>
              <span className={styles.copyStatus} role="status">{copyMessage}</span>
            </div>
          ) : null}
        </div>
        <div className={styles.previewArea}>
          <div className={styles.computer}>
            <div className={styles.monitor}>
              <div className={styles.browserBar}>
                <div className={styles.windowDots} aria-hidden="true"><i /><i /><i /></div>
                <span className={styles.address}><Globe size={10} />{project.liveUrl ? new URL(project.liveUrl).hostname : project.title}</span>
                {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} at full size`}><Maximize2 size={13} /></a> : <Github size={13} aria-hidden="true" />}
              </div>
              <div className={styles.screen} ref={screen}>
                {project.liveUrl ? <iframe key={project.liveUrl} src={project.liveUrl} title={`${project.title} interactive live preview`} className={styles.livePreview} style={{ transform: `scale(${screenWidth / 1280})`, visibility: screenWidth ? "visible" : "hidden" }} sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox" referrerPolicy="strict-origin-when-cross-origin" /> : null}
              </div>
              <div className={styles.chin}><span>{project.liveUrl ? "Live preview · click to explore" : "Project spotlight"}</span><i /></div>
            </div>
            <div className={styles.stand} aria-hidden="true" /><div className={styles.foot} aria-hidden="true" />
          </div>
          <p className={styles.previewCaption}>Explore CareCircle inside the screen, or open the live app at full size.</p>
        </div>
      </div>
    </section>
  );
}
