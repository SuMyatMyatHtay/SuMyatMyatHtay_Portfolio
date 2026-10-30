import { BriefcaseBusiness } from "lucide-react";
import PageShell from "../../components/page-shell";
import PageIntro from "../../components/page-intro";
import AnimatedSection from "../../components/animated-section";
import { experiences } from "../../data/portfolio";

export const metadata = { title: "Experience" };

export default function ExperiencePage() {
  const groups = [
    { title: "Professional experience", items: experiences.filter((item) => item.organisation === "Octopus8") },
    { title: "Campus roles", items: experiences.filter((item) => item.organisation !== "Octopus8") },
  ];
  return (
    <PageShell>
      <PageIntro index="03" eyebrow="Experience" title="Where I contribute." body="My responsibilities across industry work, university operations and student leadership." />
      {groups.map((group) => (
      <AnimatedSection className="section-frame experience-group" key={group.title}>
        <div className="section-heading"><h2>{group.title}</h2></div>
        <div className="experience-list">
          {group.items.map((item, index) => (
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
      ))}
    </PageShell>
  );
}
