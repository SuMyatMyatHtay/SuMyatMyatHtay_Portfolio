"use client";

import { motion } from "framer-motion";
import { badges } from "../data/portfolio";

export default function TechBadges() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {badges.map((badge, index) => (
        <motion.span
          key={badge}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.04 }}
          className="rounded-2xl border-[3px] border-[#181818] bg-white px-4 py-2 text-sm font-bold shadow-[4px_4px_0_#181818]"
        >
          {badge}
        </motion.span>
      ))}
    </div>
  );
}