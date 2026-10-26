"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AmbientBackground() {
  const reduced = useReducedMotion();

  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient-grid" />
      <motion.div
        className="orb orb-one"
        animate={reduced ? undefined : { x: [0, 28, -16, 0], y: [0, -22, 12, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb orb-two"
        animate={reduced ? undefined : { x: [0, -24, 18, 0], y: [0, 18, -18, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="sparkle-field" />
      <div className="scanline" />
    </div>
  );
}
