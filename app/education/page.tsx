import { BookOpen, GraduationCap, Trophy } from "lucide-react";
import PageShell from "../../components/page-shell";
import PageIntro from "../../components/page-intro";
import AnimatedSection from "../../components/animated-section";
import { education } from "../../data/portfolio";

export const metadata = { title: "Education" };

export default function EducationPage() {
  return (
    <PageShell>
      <PageIntro index="02" eyebrow="Education" title="Academic background, built through doing." body="A timeline of the places where I learned the fundamentals—and the projects, communities and competitions that made those fundamentals real." />

      <AnimatedSection className="section-frame">
        <div className="section-heading"><p className="eyebrow">Formal education</p><h2>Where the foundation came from.</h2></div>
        <div className="timeline">
          {education.map((item, index) => (
            <article className="timeline-card" key={item.school}>
              <div className="timeline-marker"><GraduationCap size={21} /></div>
              <div className="timeline-meta"><span>{item.period}</span><span>{item.location}</span></div>
              <h3>{item.school}</h3>
              <h4>{item.programme}</h4>
              <p>{item.description}</p>
              <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              <span className="timeline-index">0{index + 1}</span>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-frame education-callouts">
        <article><BookOpen size={24} /><p className="eyebrow">Learning style</p><h3>Project-first</h3><p>I learn best when theory immediately has somewhere to go: a prototype, workflow, system, experiment or competition.</p></article>
        <article><Trophy size={24} /><p className="eyebrow">Outside class</p><h3>Competitive building</h3><p>Hackathons have become one of my favourite ways to test ideas quickly, work under pressure and communicate technical decisions clearly.</p></article>
      </AnimatedSection>
    </PageShell>
  );
}
