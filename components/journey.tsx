"use client";

import { motion } from "framer-motion";
import { journeyItems } from "../data/portfolio";
import SectionTitle from "./section-title";

export default function Journey() {
  return (
    <section id="journey" className="px-6 py-14 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          id="projects"
          label="Journey"
          title="A portfolio that feels fun, but still says engineer."
          body="This section gives you a visual timeline card layout that matches the playful UI while still showing credible experience and project direction."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {journeyItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`card-outline rounded-[28px] ${item.color} p-5`}
            >
              <div className="rounded-[22px] border-[3px] border-[#181818] bg-[#fffdf7] p-5">
                <div className="inline-block rounded-2xl border-[3px] border-[#181818] bg-white px-3 py-2 text-sm font-bold">
                  {item.year}
                </div>
                <h3 className="mt-5 text-2xl font-bold leading-tight">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#3a3a3a]">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}