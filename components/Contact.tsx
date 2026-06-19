"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { contacts } from "@/data/data";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContactForm } from "@/src/lib/supabase";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "idle" | "submitting" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Vui lòng điền đầy đủ các thông tin." });
      return;
    }

    setStatus({ type: "submitting" });

    const result = await submitContactForm(formData.name, formData.email, formData.message);

    if (result.success) {
      setStatus({
        type: "success",
        message: "Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công. Tôi sẽ phản hồi sớm nhất có thể.",
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus({
        type: "error",
        message: `Đã xảy ra lỗi: ${result.error || "Không thể kết nối"}. Vui lòng thử lại sau.`,
      });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="glass grain-card rounded-3xl p-5 sm:p-8 space-y-6"
      id="contact"
    >
      <div>
        <h2 className="section-title mb-1">Liên hệ</h2>
        <p className="text-sm text-[color:var(--muted)]">
          Kết nối trực tiếp hoặc gửi tin nhắn cho tôi qua biểu mẫu bên dưới.
        </p>
      </div>

      {/* Contact info cards */}
      <div className="grid gap-3 sm:grid-cols-2">
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
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-[color:var(--muted)]">{contact.label}</p>
                  <p className="text-sm font-semibold text-[color:var(--text)] transition-colors duration-300 group-hover:text-[color:var(--primary)] truncate break-all line-clamp-2 max-w-xs">
                    {contact.value}
                  </p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Message Form */}
      <div className="border-t border-[color:var(--border)] pt-6">
        <h3 className="text-base font-bold text-[color:var(--text)] mb-4">Gửi tin nhắn</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-[color:var(--muted)] uppercase tracking-wider mb-1.5">
              Họ và tên
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nhập họ và tên của bạn"
              disabled={status.type === "submitting"}
              className="w-full text-sm rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)]/60 px-4 py-2.5 text-[color:var(--text)] outline-none transition-all focus:border-[color:var(--primary)] focus:ring-2 focus:ring-[color:var(--primary)]/20 disabled:opacity-50"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-[color:var(--muted)] uppercase tracking-wider mb-1.5">
              Địa chỉ Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ten@example.com"
              disabled={status.type === "submitting"}
              className="w-full text-sm rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)]/60 px-4 py-2.5 text-[color:var(--text)] outline-none transition-all focus:border-[color:var(--primary)] focus:ring-2 focus:ring-[color:var(--primary)]/20 disabled:opacity-50"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-[color:var(--muted)] uppercase tracking-wider mb-1.5">
              Lời nhắn
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Nhập nội dung tin nhắn liên hệ..."
              disabled={status.type === "submitting"}
              className="w-full text-sm rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)]/60 px-4 py-2.5 text-[color:var(--text)] outline-none transition-all focus:border-[color:var(--primary)] focus:ring-2 focus:ring-[color:var(--primary)]/20 disabled:opacity-50 resize-none"
              required
            />
          </div>

          {/* Form statuses */}
          {status.type === "success" && (
            <div className="flex gap-2 rounded-xl bg-emerald-500/10 p-3 text-sm text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
              <p>{status.message}</p>
            </div>
          )}

          {status.type === "error" && (
            <div className="flex gap-2 rounded-xl bg-rose-500/10 p-3 text-sm text-rose-600 dark:text-rose-400 border border-rose-500/20">
              <AlertCircle size={18} className="shrink-0 mt-0.5" />
              <p>{status.message}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status.type === "submitting"}
            className="w-full accent-button py-3 text-sm flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {status.type === "submitting" ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/50 border-t-white" />
                Đang gửi tin nhắn...
              </>
            ) : (
              <>
                <Send size={16} />
                Gửi liên hệ
              </>
            )}
          </button>
        </form>
      </div>
    </motion.section>
  );
}
