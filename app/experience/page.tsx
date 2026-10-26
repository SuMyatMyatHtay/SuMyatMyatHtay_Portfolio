import { BriefcaseBusiness } from "lucide-react";
import PageShell from "../../components/page-shell";
import PageIntro from "../../components/page-intro";
import AnimatedSection from "../../components/animated-section";
import { experiences } from "../../data/portfolio";

export const metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <PageShell>
      <PageIntro index="03" eyebrow="Experience" title="Work, leadership, and learning in the real world." body="The roles that taught me how to communicate across teams, ship under constraints, manage responsibility and connect technical work to actual operations." />
      <AnimatedSection className="section-frame">
        <div className="section-heading"><p className="eyebrow">Journey</p><h2>Roles that shaped how I build.</h2></div>
        <div className="experience-list">
          {experiences.map((item, index) => (
            <article className="experience-card" key={`${item.organisation}-${item.role}`}>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-icon"><BriefcaseBusiness size={21} /></div>
              <div className="experience-main">
                <div className="experience-topline"><span>{item.period}</span><span>{item.location}</span></div>
                <h3>{item.role}</h3><h4>{item.organisation}</h4>
                <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </PageShell>
  );
}
