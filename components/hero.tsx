"use client";

import { motion } from "framer-motion";
import AvatarCard from "./avatar-card";
import FloatingShapes from "./floating-shapes";
import TechBadges from "./tech-badges";
import PaperDivider from "./paper-divider";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden soft-grid">
      <FloatingShapes />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="inline-block rounded-2xl border-[3px] border-[#181818] bg-[#baf7b8] px-4 py-2 text-sm font-bold shadow-[4px_4px_0_#181818]">
            Hi there 👋
          </div>

          <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            I’m Su Myat Myat Htay,
            <span className="block text-[#ff6b57]">an innovative software engineer.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#3a3a3a]">
            I build polished digital products across web, data, AI, and immersive experiences.
            This portfolio uses a fun animated interface inspired by modern social-style UI, but shaped for engineering work.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-2xl border-[3px] border-[#181818] bg-[#8ce7ff] px-6 py-3 text-base font-bold shadow-[5px_5px_0_#181818] transition hover:-translate-y-1"
            >
              See Projects
            </a>
            <a
              href="#contact"
              className="rounded-2xl border-[3px] border-[#181818] bg-white px-6 py-3 text-base font-bold shadow-[5px_5px_0_#181818] transition hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>

          <TechBadges />
        </motion.div>

        <AvatarCard />
      </div>

      <PaperDivider />
    </section>
  );
}