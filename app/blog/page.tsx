"use client";

import Link from "next/link";
import { posts } from "@/src/data/posts";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowRight } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] bg-clip-text text-transparent">
          Blog cá nhân
        </h1>
        <p className="text-[color:var(--muted)] text-sm sm:text-base">
          Chia sẻ kiến thức, kinh nghiệm tự học và những ghi chép công nghệ thú vị.
        </p>
      </div>

      <div className="grid gap-6">
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group border rounded-2xl p-5 hover:shadow-soft transition-all duration-300 relative overflow-hidden"
            style={{ background: "color-mix(in srgb, var(--bg-elevated) 86%, transparent)" }}
          >
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[color:var(--primary)]/5 to-transparent rounded-bl-full pointer-events-none" />

            <div className="flex flex-wrap items-center gap-3 mb-3 text-xs">
              <span className="inline-flex items-center gap-1 bg-[color:var(--primary)]/15 text-[color:var(--primary)] text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                <Tag size={12} />
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-[color:var(--muted)]">
                <Calendar size={12} />
                {post.date}
              </span>
            </div>

            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-lg sm:text-xl font-bold mb-2 text-[color:var(--text)] hover:text-[color:var(--primary)] transition-colors">
                {post.title}
              </h2>
            </Link>

            <p className="text-sm text-[color:var(--muted)] mb-4 line-clamp-2 leading-relaxed">
              {post.excerpt}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1 text-[color:var(--primary)] text-sm font-bold hover:underline group/btn"
            >
              Đọc tiếp
              <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
