"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "princess" : "cyberpunk"} theme`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -45, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 45, scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? <MoonStar size={18} /> : <Sun size={18} />}
        </motion.span>
      </AnimatePresence>
      <span className="hidden sm:inline">{isDark ? "Cyber" : "Princess"}</span>
    </button>
  );
}
