"use client";

import { motion } from "framer-motion";
import { education, traits } from "@/data/data";

export function About() {
  const EducationIcon = education.icon;

  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="glass grain-card rounded-3xl p-5 sm:p-8"
      id="about"
    >
      <h2 className="section-title">Giới thiệu</h2>

      <div
        className="mb-5 rounded-2xl border p-4"
        style={{ background: "color-mix(in srgb, var(--bg-elevated) 88%, transparent)" }}
      >
        <div className="flex items-center gap-3">
          <span className="rounded-xl bg-[color:var(--primary)]/15 p-2 text-[color:var(--primary)]">
            <EducationIcon size={18} />
          </span>
          <div>
            <p className="font-semibold">{education.university}</p>
            <p className="text-sm text-[color:var(--muted)]">
              {education.status} - {education.major}
            </p>
          </div>
        </div>
      </div>

      <ul className="space-y-3">
        {traits.map((trait) => {
          const Icon = trait.icon;
          return (
            <motion.li
              key={trait.title}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-2xl border p-4 shadow-sm transition-shadow hover:shadow-soft"
              style={{ background: "color-mix(in srgb, var(--bg-elevated) 86%, transparent)" }}
            >
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-[color:var(--accent)]/25 p-2 text-[color:var(--primary)]">
                  <Icon size={18} />
                </span>
                <span className="text-sm font-medium sm:text-base">{trait.title}</span>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </motion.section>
  );
}
