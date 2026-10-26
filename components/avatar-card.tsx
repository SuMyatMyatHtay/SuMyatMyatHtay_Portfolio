"use client";

import { motion } from "framer-motion";
import { Award, Code2, Cpu, Sparkles } from "lucide-react";
import CodeSticker from "./code-sticker";
import { useTheme } from "./theme-provider";

export default function AvatarCard() {
  const { theme } = useTheme();

  return (
    <div className="relative mx-auto w-full max-w-[360px]">
      <CodeSticker className="-left-8 top-0" rotate={-8} color="#8ce7ff">
        {"</>"}
      </CodeSticker>

      <CodeSticker className="right-0 top-16" rotate={4} color="#ffd84d">
        {">_"}
      </CodeSticker>

      <CodeSticker className="-left-12 bottom-10" rotate={-10} color="#baf7b8">
        {"💾"}
      </CodeSticker>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="hero-visual"
        >
          <div className="portrait-card">
            <div className="portrait-halo" />
            <div className="portrait-core">
              {/* <img
                src="/sera-profile.jpg"
                alt="Sera"
                className="portrait-photo"
              /> */}

              <img
                src={theme === "dark" ? "/profile-dark.jpg" : "/profile-light.jpg"}
                alt="Su Myat Myat Htay"
                className="profile-image"
              />
              <p>software + ai + product</p>
            </div>
            <motion.div animate={{ y: [0, -8, 0], rotate: [-4, 2, -4] }} transition={{ duration: 4, repeat: Infinity }} className="float-chip chip-code"><Code2 size={18} /> build()</motion.div>
            <motion.div animate={{ y: [0, 10, 0], rotate: [4, -2, 4] }} transition={{ duration: 5, repeat: Infinity }} className="float-chip chip-ai"><Cpu size={18} /> agents</motion.div>
            <motion.div animate={{ y: [0, -6, 0], rotate: [2, 5, 2] }} transition={{ duration: 4.6, repeat: Infinity }} className="float-chip chip-win"><Award size={18} /> hackathons</motion.div>
            <Sparkles className="portrait-sparkle sparkle-a" />
            <Sparkles className="portrait-sparkle sparkle-b" />
          </div>
        </motion.div>
    </div>
  );
}
