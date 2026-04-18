"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { contacts } from "@/data/data";

export function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="glass grain-card rounded-3xl p-5 sm:p-8"
      id="contact"
    >
      <h2 className="section-title">Liên hệ</h2>
      <div className="space-y-3">
        {contacts.map((contact) => {
          const Icon = contact.icon;
          return (
            <motion.div
              key={contact.label}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-2xl border p-4 shadow-sm transition-shadow hover:shadow-soft"
              style={{ background: "color-mix(in srgb, var(--bg-elevated) 86%, transparent)" }}
            >
              <Link
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-3"
              >
                <span className="rounded-xl bg-[color:var(--primary)]/15 p-2 text-[color:var(--primary)] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-sm text-[color:var(--muted)]">{contact.label}</p>
                  <p className="font-medium text-[color:var(--text)] transition-colors duration-300 group-hover:text-[color:var(--primary)]">
                    {contact.value}
                  </p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
