"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="floating-blob left-[8%] top-[12%] h-20 w-20 bg-[#ffc7de]"
      />

      <motion.div
        animate={{ y: [0, 14, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="floating-blob right-[10%] top-[24%] h-14 w-14 bg-[#8ce7ff]"
      />

      <motion.div
        animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="floating-blob bottom-[16%] left-[14%] h-16 w-16 bg-[#baf7b8]"
      />
    </div>
  );
}