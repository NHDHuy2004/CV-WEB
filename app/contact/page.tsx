"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail, MapPin } from "lucide-react";
import { Contact } from "@/components/Contact";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-xs font-semibold text-[color:var(--primary)] hover:underline mb-1"
        >
          <ArrowLeft size={14} /> Quay lại trang chủ
        </Link>
        <h1 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] bg-clip-text text-transparent">
          Liên hệ & Kết nối
        </h1>
        <p className="text-[color:var(--muted)] text-sm sm:text-base">
          Cảm ơn bạn đã ghé thăm trang cá nhân của tôi. Đừng ngần ngại gửi tin nhắn nếu bạn quan tâm đến hồ sơ của tôi!
        </p>
      </motion.div>

      {/* Grid containing details & Form */}
      <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] items-start">
        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass grain-card rounded-3xl p-6 space-y-6"
        >
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-[color:var(--text)]">Thông tin văn phòng</h2>
            
            <div className="space-y-4 text-sm text-[color:var(--muted)]">
              <div className="flex gap-3">
                <span className="rounded-xl bg-[color:var(--primary)]/10 p-2.5 text-[color:var(--primary)] shrink-0 self-start">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="font-semibold text-[color:var(--text)]">Địa chỉ trường học</p>
                  <p className="mt-0.5">Trường Đại học Đà Lạt</p>
                  <p className="text-xs">01 Phù Đổng Thiên Vương, Phường 8, TP. Đà Lạt, Lâm Đồng</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="rounded-xl bg-[color:var(--primary)]/10 p-2.5 text-[color:var(--primary)] shrink-0 self-start">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="font-semibold text-[color:var(--text)]">Email chính thức</p>
                  <a href="mailto:nhdhuy1109@gmail.com" className="hover:text-[color:var(--primary)] transition-colors">
                    nhdhuy1109@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-[color:var(--border)]" />

          <div className="bg-[color:var(--bg)]/50 rounded-2xl p-4 border border-dashed text-xs text-[color:var(--muted)] leading-relaxed">
            <p className="font-bold text-[color:var(--text)] mb-1">Thời gian phản hồi:</p>
            <p>Tôi thường xuyên kiểm tra hòm thư cá nhân và sẽ phản hồi các tin nhắn liên hệ trong vòng 24 - 48 giờ làm việc.</p>
          </div>
        </motion.div>

        {/* Dynamic Form Component (Supabase integrated) */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Contact />
        </motion.div>
      </div>
    </main>
  );
}
