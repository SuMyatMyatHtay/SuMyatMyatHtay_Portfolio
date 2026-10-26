"use client";

import { motion } from "framer-motion";

export default function PageIntro({
  index,
  eyebrow,
  title,
  body,
}: {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="section-frame page-intro">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="page-kicker"><span>{index}</span>{eyebrow}</div>
        <h1 className="page-title">{title}</h1>
        <p className="page-lede">{body}</p>
      </motion.div>
    </section>
  );
}
