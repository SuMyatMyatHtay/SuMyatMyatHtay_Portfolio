"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  rotate?: number;
  color?: string;
};

export default function CodeSticker({
  children,
  className = "",
  rotate = 0,
  color = "#8ce7ff",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, rotate }}
      animate={{ opacity: 1, y: [0, -8, 0], rotate }}
      transition={{
        opacity: { duration: 0.4 },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`absolute z-30 rounded-[20px] border-[3px] border-[#181818] p-3 shadow-[6px_6px_0_#181818] ${className}`}
      style={{ backgroundColor: color }}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-[14px] border-[3px] border-[#181818] bg-[#fffdf7] text-2xl font-bold">
        {children}
      </div>
    </motion.div>
  );
}