"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/data";

export function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="glass rounded-3xl border p-5 shadow-soft sm:p-8"
      id="skills"
    >
      <h2 className="mb-5 text-xl font-semibold sm:text-2xl">Kỹ năng</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.article
              key={skill.name}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-2xl border bg-white/80 p-4 shadow-sm transition-shadow hover:shadow-soft dark:bg-slate-900/75"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-[color:var(--accent)]/25 p-2 text-[color:var(--primary)]">
                  <Icon size={18} />
                </span>
                <p className="font-medium">{skill.name}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
