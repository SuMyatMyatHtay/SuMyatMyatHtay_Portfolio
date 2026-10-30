import { Globe, GraduationCap } from "lucide-react";
import Image from "next/image";
import PageShell from "../../components/page-shell";
import AnimatedSection from "../../components/animated-section";
import styles from "./education.module.css";
import { education } from "../../data/portfolio";

export const metadata = { title: "Education" };

export default function EducationPage() {
  return (
    <PageShell>
      <AnimatedSection className={`section-frame ${styles.section}`}>
        <h1 className={styles.title}>Formal education</h1>
        <div className={styles.timeline}>
          {education.map((item) => (
            <article className={styles.entry} key={item.school}>
              <span className={styles.dot} aria-hidden="true" />
              <header className={styles.header}>
                <div className={styles.schoolMark}>
                  <Image
                    src={item.logo}
                    alt={`${item.school} logo`}
                    width={60}
                    height={60}
                    className={styles.schoolLogo}
                  />
                </div>
                <h2>{item.school}</h2>
                <a className={styles.website} href={item.website} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${item.school} website`}><Globe size={19} /></a>
              </header>
              <div className={styles.meta}><p>{item.location}</p><p>{item.period}</p></div>
              <div className={styles.details}>
                <span className={styles.degreeIcon} aria-hidden="true"><GraduationCap size={22} /></span>
                <div className={styles.detailsCopy}>
                  <h3>{item.programme}</h3>
                  <p className={styles.specialization}>{item.description}</p>
                  <h4>Activities &amp; Involvement</h4>
                  <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>

    </PageShell>
  );
}
