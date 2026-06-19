"use client";

import { motion } from "framer-motion";
import { FolderGit2, Github, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/data";

export function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="glass grain-card rounded-3xl p-5 sm:p-8"
      id="projects"
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="section-title mb-0 flex items-center gap-2">
          <FolderGit2 className="text-[color:var(--primary)]" size={24} />
          Dự án nổi bật
        </h2>
        <a
          href="/projects"
          className="text-sm font-semibold text-[color:var(--primary)] hover:underline flex items-center gap-1 group"
        >
          Tất cả dự án
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="group flex flex-col justify-between rounded-2xl border p-5 transition-shadow hover:shadow-soft relative overflow-hidden"
            style={{ background: "color-mix(in srgb, var(--bg-elevated) 86%, transparent)" }}
          >
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[color:var(--primary)]/5 to-transparent rounded-bl-full pointer-events-none" />

            <div>
              <div className="mb-3 flex items-center justify-between">
                <span
                  className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    project.status === "Hoàn thành"
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                      : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                  }`}
                >
                  {project.status}
                </span>
                
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[color:var(--bg-elevated)] p-1.5 text-[color:var(--muted)] border hover:text-[color:var(--primary)] hover:border-[color:var(--primary)]/40 transition-colors"
                  title="Xem mã nguồn trên GitHub"
                >
                  <Github size={18} />
                </a>
              </div>

              <h3 className="text-lg font-bold text-[color:var(--text)] group-hover:text-[color:var(--primary)] transition-colors mb-2">
                {project.title}
              </h3>
              
              <p className="text-sm text-[color:var(--muted)] mb-4 line-clamp-4 leading-relaxed">
                {project.description}
              </p>

              {/* Impact Badge */}
              {project.impact && (
                <div className="mb-4 rounded-lg bg-[color:var(--primary)]/10 border border-[color:var(--primary)]/20 px-3 py-2">
                  <p className="text-xs font-semibold text-[color:var(--primary)]">
                    ✨ {project.impact}
                  </p>
                </div>
              )}

              {/* Metrics */}
              {project.metrics && (
                <div className="mb-4 grid grid-cols-2 gap-2">
                  {project.metrics.accuracy && (
                    <div className="rounded-lg bg-[color:var(--bg)]/50 p-2 border text-center">
                      <p className="text-xs text-[color:var(--muted)]">Độ chính xác</p>
                      <p className="text-sm font-bold text-[color:var(--text)]">{project.metrics.accuracy}</p>
                    </div>
                  )}
                  {project.metrics.speedup && (
                    <div className="rounded-lg bg-[color:var(--bg)]/50 p-2 border text-center">
                      <p className="text-xs text-[color:var(--muted)]">Tốc độ</p>
                      <p className="text-sm font-bold text-[color:var(--text)]">{project.metrics.speedup}</p>
                    </div>
                  )}
                  {project.metrics.lighthouse && (
                    <div className="rounded-lg bg-[color:var(--bg)]/50 p-2 border text-center">
                      <p className="text-xs text-[color:var(--muted)]">Lighthouse</p>
                      <p className="text-sm font-bold text-[color:var(--text)]">{project.metrics.lighthouse}</p>
                    </div>
                  )}
                  {project.metrics.linesOfCode && (
                    <div className="rounded-lg bg-[color:var(--bg)]/50 p-2 border text-center">
                      <p className="text-xs text-[color:var(--muted)]">Code Lines</p>
                      <p className="text-sm font-bold text-[color:var(--text)]">{project.metrics.linesOfCode}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Lessons Learned */}
              {project.lessonsLearned && project.lessonsLearned.length > 0 && (
                <div className="mb-4 bg-[color:var(--bg)]/40 rounded-xl p-3 border border-dashed">
                  <p className="text-xs font-bold text-[color:var(--text)] mb-2">📚 Lessons Learned</p>
                  <ul className="space-y-1">
                    {project.lessonsLearned.map((lesson, idx) => (
                      <li key={idx} className="text-xs text-[color:var(--muted)] leading-snug">
                        • {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-4 bg-[color:var(--bg)]/40 rounded-xl p-3 border border-dashed text-xs text-[color:var(--muted)]">
                <span className="font-bold text-[color:var(--text)]">Vai trò:</span> <span className="block mt-1 break-words">{project.role}</span>
              </div>
            </div>

            <div className="mt-auto pt-2 space-y-2">
              {/* Demo Link */}
              {project.demoUrl && project.demoUrl !== "#" && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[color:var(--primary)] hover:underline"
                >
                  → Live Demo
                </a>
              )}

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((techItem) => (
                  <span
                    key={techItem}
                    className="text-[10px] font-semibold bg-[color:var(--bg-elevated)] text-[color:var(--text)] border rounded px-2 py-1"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
