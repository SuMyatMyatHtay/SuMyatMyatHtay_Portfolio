"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { socials } from "../data/portfolio";
import SectionTitle from "./section-title";

const icons = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
};

export default function SocialLinks() {
  return (
    <section id="contact" className="px-6 pb-20 pt-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          id="contact"
          label="Contact"
          title="Let’s make your portfolio feel memorable."
          body="You can keep this section simple now, then later add a real GitHub link, downloadable resume, and project detail pages."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {socials.map((item, index) => {
            const Icon = icons[item.label as keyof typeof icons];

            return (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="card-outline rounded-[28px] bg-white p-5 transition hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl border-[3px] border-[#181818] bg-[#ffd84d] p-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5" />
                </div>

                <div className="mt-5 text-sm font-bold text-[#555]">{item.label}</div>
                <div className="mt-2 text-lg font-bold leading-7">{item.value}</div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}