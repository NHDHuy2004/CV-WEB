"use client";

import { motion } from "framer-motion";
import { BookOpen, Brain, GraduationCap, Users } from "lucide-react";
import { education, profile, traits } from "@/data/data";

export default function AboutPage() {
  const EducationIcon = education.icon;

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8 space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] bg-clip-text text-transparent">
          Giới thiệu bản thân
        </h1>
        <p className="text-[color:var(--muted)] text-base sm:text-lg">
          Tìm hiểu thêm về hành trình học tập, mục tiêu nghề nghiệp và những kỹ năng tôi đã tích lũy.
        </p>
      </motion.div>

      {/* Main Content card */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="glass grain-card rounded-3xl p-6 sm:p-8 space-y-6"
      >
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[color:var(--text)]">Tóm tắt về tôi</h2>
          <p className="text-sm sm:text-base leading-relaxed text-[color:var(--muted)] whitespace-pre-line">
            {profile.aboutText}
          </p>
        </div>

        <hr className="border-[color:var(--border)]" />

        {/* Education Details */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[color:var(--text)] flex items-center gap-2">
            <EducationIcon className="text-[color:var(--primary)]" size={22} />
            Học vấn
          </h2>
          <div
            className="rounded-2xl border p-5 space-y-3"
            style={{ background: "color-mix(in srgb, var(--bg-elevated) 88%, transparent)" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="font-bold text-base sm:text-lg">{education.university}</h3>
                <p className="text-sm text-[color:var(--muted)]">
                  {education.status} &bull; Chuyên ngành {education.major}
                </p>
              </div>
              <span className="soft-pill shrink-0 self-start sm:self-center border-[color:var(--primary)]/30 text-[color:var(--primary)]">
                {education.period}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[color:var(--border)]/40 text-sm">
              <div>
                <p className="text-xs text-[color:var(--muted)]">Điểm trung bình (GPA)</p>
                <p className="font-semibold text-base text-[color:var(--primary)] mt-0.5">{education.gpa}</p>
              </div>
              <div>
                <p className="text-xs text-[color:var(--muted)]">Ngoại ngữ</p>
                <p className="font-semibold text-base text-[color:var(--accent)] mt-0.5">Tiếng Anh {profile.englishLevel}</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-[color:var(--border)]" />

        {/* Core Values / Traits */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[color:var(--text)]">Phẩm chất & Tinh thần làm việc</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {traits.map((trait, index) => {
              const Icon = trait.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border p-4 flex flex-col items-center text-center gap-3"
                  style={{ background: "color-mix(in srgb, var(--bg-elevated) 86%, transparent)" }}
                >
                  <span className="rounded-xl bg-[color:var(--primary)]/10 p-2.5 text-[color:var(--primary)]">
                    <Icon size={20} />
                  </span>
                  <p className="text-sm font-semibold text-[color:var(--text)]">
                    {trait.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
