import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { socials } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-frame footer-grid">
        <div>
          <p className="eyebrow">Let&apos;s build something memorable</p>
          <h2 className="footer-title">Have an idea, opportunity, or collaboration in mind?</h2>
          <a className="primary-button mt-6 inline-flex" href={`mailto:${socials[0].value}`}>
            <Mail size={17} /> Say hello
          </a>
        </div>
        <div className="footer-links">
          <div>
            <p className="footer-label">Explore</p>
            <a href="/#my-story">My Story</a>
            <Link href="/education">Education</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
          </div>
          <div>
            <p className="footer-label">Connect</p>
            {socials.map((social) => (
              <a key={social.label} href={social.href} target={social.label === "LinkedIn" ? "_blank" : undefined} rel="noreferrer">
                {social.label} <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="section-frame footer-bottom">
        <span>© 2026 Su Myat Myat Htay</span>
        <span>Designed for both soft pink dreams & neon nights ✦</span>
      </div>
    </footer>
  );
}
