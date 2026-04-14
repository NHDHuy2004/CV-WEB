"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { GraduationCap, Languages, Star } from "lucide-react";
import { profile } from "@/data/data";

export function Hero() {
  const [avatarSrc, setAvatarSrc] = useState(profile.avatarPath);

  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="glass rounded-3xl border p-5 shadow-soft sm:p-8"
      id="hero"
    >
      <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.04 }}
          className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white/70 shadow-soft sm:h-44 sm:w-44"
        >
          <Image
            src={avatarSrc}
            alt={profile.fullName}
            fill
            priority
            sizes="(max-width: 640px) 128px, 176px"
            className="object-cover"
            onError={() => setAvatarSrc(profile.avatarFallbackPath)}
          />
        </motion.div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">{profile.fullName}</h1>
          <p className="text-base font-medium text-[color:var(--primary)] sm:text-lg">{profile.title}</p>
          <p className="text-sm text-[color:var(--muted)] sm:text-base">{profile.major}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <StatCard label="English" value={profile.englishLevel} icon={Languages} />
        <StatCard label="GPA" value={profile.gpa} icon={Star} />
        <StatCard label="Trường" value="Đại học Đà Lạt" icon={GraduationCap} />
      </div>
    </motion.section>
  );
}

function StatCard({
  label,
  value,
  icon: Icon
}: {
  label: string;
  value: string;
  icon: typeof Languages;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="rounded-2xl border bg-white/75 p-3 shadow-sm transition-shadow hover:shadow-soft dark:bg-slate-900/70"
    >
      <div className="mb-1 flex items-center gap-2 text-sm text-[color:var(--muted)]">
        <Icon size={16} />
        <span>{label}</span>
      </div>
      <p className="font-semibold text-[color:var(--text)]">{value}</p>
    </motion.div>
  );
}
