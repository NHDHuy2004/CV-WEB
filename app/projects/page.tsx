"use client";

import { motion } from "framer-motion";
import { FolderGit2, Github, ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/data";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[color:var(--primary)] hover:underline mb-1"
          >
            <ArrowLeft size={14} /> Quay lại trang chủ
          </Link>
          <h1 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] bg-clip-text text-transparent flex items-center gap-2">
            <FolderGit2 className="text-[color:var(--primary)] shrink-0" size={32} />
            Dự án phát triển
          </h1>
          <p className="text-[color:var(--muted)] text-sm sm:text-base">
            Danh sách các dự án thực tế tôi đã thực hiện trong quá trình học tập và tự nghiên cứu.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="group flex flex-col justify-between rounded-3xl border p-6 glass grain-card transition-shadow hover:shadow-soft relative overflow-hidden"
          >
            {/* Design accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[color:var(--primary)]/5 to-transparent rounded-bl-full pointer-events-none" />

            <div>
              <div className="mb-4 flex items-center justify-between">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider ${
                    project.status === "Hoàn thành"
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                      : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                  }`}
                >
                  {project.status}
                </span>

                <span className="text-xs text-[color:var(--muted)] font-medium">
                  GitHub Project
                </span>
              </div>

              <h2 className="text-xl font-bold text-[color:var(--text)] group-hover:text-[color:var(--primary)] transition-colors mb-3">
                {project.title}
              </h2>

              <p className="text-sm text-[color:var(--muted)] mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Role Box */}
              <div className="mb-5 bg-[color:var(--bg)]/60 rounded-2xl p-4 border border-dashed text-xs sm:text-sm text-[color:var(--muted)]">
                <p className="font-bold text-[color:var(--text)] mb-1">Vai trò của tôi:</p>
                <p>{project.role}</p>
              </div>
            </div>

            <div className="mt-auto space-y-4 pt-2">
              {/* Tech list */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-semibold bg-[color:var(--bg-elevated)] text-[color:var(--text)] border rounded-lg px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <hr className="border-[color:var(--border)]/60" />

              {/* Project CTA Links */}
              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-[color:var(--border)] px-4 py-2.5 text-xs sm:text-sm font-semibold text-[color:var(--text)] hover:bg-[color:var(--bg-elevated)] transition-colors"
                >
                  <Github size={16} />
                  Mã nguồn GitHub
                </a>
                
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-[color:var(--primary)] text-white hover:bg-[color:var(--primary)]/90 p-2.5 transition-colors"
                  title="Đi đến dự án"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </main>
  );
}
