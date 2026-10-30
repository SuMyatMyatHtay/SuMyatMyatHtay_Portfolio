import Image from "next/image";
import { ArrowRight, Bot, CheckCheck, FileText, Film, Heart, Layers3, ScanLine, ShieldCheck, Sparkles, Users } from "lucide-react";
import type { PortfolioProject } from "../data/portfolio";
import styles from "./project-artwork.module.css";

export default function ProjectArtwork({ project }: { project: PortfolioProject }) {
  return (
    <div className={`${styles.artwork} ${styles[project.visual || "care"]}`} aria-hidden="true">
      {project.visual === "vr" && project.image ? <Image src={project.image} alt="" fill sizes="(max-width: 700px) 100vw, 600px" className={styles.photo} /> : null}
      <span className={styles.corner}>{project.visual === "vr" ? "In-game capture" : "Project concept"}</span>
      {project.visual === "finance" && <div className={styles.financeFlow}><div className={styles.document}><FileText size={28} /><span>Invoice</span><i /><i /><i /></div><ArrowRight className={styles.flowArrow} /><div className={styles.engine}><Sparkles size={26} /><strong>AI review</strong><span>Extract · Match · Screen</span></div><ArrowRight className={styles.flowArrow} /><div className={styles.approval}><CheckCheck size={25} /><span>Human approval</span></div></div>}
      {project.visual === "logs" && <div className={styles.terminal}><div className={styles.terminalTop}><span /><span /><span /><small>smart-tool-parser</small></div><div className={styles.codeLine}><b>01</b><span>ingest<span className={styles.codeMuted}>(tool_logs)</span></span></div><div className={styles.codeLine}><b>02</b><span>normalise<span className={styles.codeMuted}>(events)</span></span></div><div className={styles.codeLine}><b>03</b><span>classify<span className={styles.codeMuted}>(urgency)</span></span></div><div className={styles.logOutput}><Layers3 size={14} /> Structured data <ArrowRight size={13} /> Actionable alerts</div></div>}
      {project.visual === "agents" && <div className={styles.agentMap}><div className={styles.agentNode}><Bot /><span>Agent A</span></div><div className={styles.governance}><ShieldCheck size={36} /><strong>AvengerAI</strong><span>Check · Approve · Audit</span></div><div className={styles.agentNode}><Bot /><span>Agent B</span></div><div className={styles.auditTrail}>Every action, accountable.</div></div>}
      {project.visual === "movies" && <div className={styles.movieScene}><div className={styles.moviePoster}><Film size={38} /><span>DISCOVER</span></div><div className={styles.moviePoster}><Heart size={38} /><span>SAVE</span></div><div className={styles.moviePoster}><Sparkles size={38} /><span>REVIEW</span></div><div className={styles.filmCaption}>A space for your next favourite.</div></div>}
      {project.visual === "care" && <div className={styles.careScene}><div><Users size={26} /><span>Family</span></div><div className={styles.careHeart}><Heart size={48} /></div><div><CheckCheck size={26} /><span>Shared care</span></div><p>Care together, closer always.</p></div>}
      {project.visual === "vr" && <div className={styles.vrTitle}><ScanLine size={22} /><span>ENTER THE RIFT</span></div>}
    </div>
  );
}
