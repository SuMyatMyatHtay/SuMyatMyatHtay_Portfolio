import { ArrowUpRight, Award, Layers3 } from "lucide-react";
import PageShell from "../../components/page-shell";
import PageIntro from "../../components/page-intro";
import AnimatedSection from "../../components/animated-section";
import { projects } from "../../data/portfolio";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageIntro index="04" eyebrow="Projects" title="Ideas brought to life, usually under a deadline." body="A collection of AI systems, automation workflows, competition builds, software projects and experiments that taught me something worth keeping." />

      <AnimatedSection className="section-frame project-list-section">
        <div className="project-list">
          {projects.map((project, index) => (
            <article key={project.title} className={`case-study accent-${project.accent}`}>
              <div className="case-number">0{index + 1}</div>
              <div className="case-main">
                <div className="case-meta"><span>{project.year}</span>{project.featured && <span className="featured-badge"><Award size={13} /> Featured</span>}</div>
                <p className="project-subtitle">{project.subtitle}</p>
                <h2>{project.title}</h2>
                <p className="case-summary">{project.summary}</p>
                <div className="case-columns">
                  <div><p className="case-label"><Layers3 size={14} /> Highlights</p><ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul></div>
                  <div><p className="case-label">Stack</p><div className="tag-row">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
                </div>
              </div>
              <ArrowUpRight className="case-arrow" size={24} />
            </article>
          ))}
        </div>
      </AnimatedSection>
    </PageShell>
  );
}
