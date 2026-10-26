"use client";

import { motion } from "framer-motion";

const items = [
  "Full-stack build mindset",
  "Immersive media",
  "Game development",
  "Analytics + delivery",
  "UI that feels alive",
  "Fast learner",
];

export default function SkillsStrip() {
  return (
    <section id="about" className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border-[3px] border-[#181818] bg-[#181818] py-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
          className="flex min-w-max gap-4 whitespace-nowrap"
        >
          {[...items, ...items, ...items].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="rounded-2xl border-[3px] border-[#181818] bg-[#fff7e8] px-4 py-2 text-sm font-bold text-[#181818]"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}