"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Trang chủ", href: "/" },
    { label: "Giới thiệu", href: "/about" },
    { label: "Dự án", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Liên hệ", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="px-4 py-4 sm:px-6 lg:px-10 max-w-6xl mx-auto">
        <nav className="glass rounded-full px-5 py-3 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group min-w-0">
          <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] bg-clip-text text-transparent transition-all duration-300 group-hover:opacity-85 truncate">
            Huy Portfolio
          </span>
          <span className="soft-pill py-0.5 px-2 text-[10px] lowercase border-[color:var(--primary)]/30 text-[color:var(--primary)] font-medium flex-shrink-0">
            ctk46
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--primary)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <span className="h-4 w-px bg-[color:var(--border)]" />
          <ThemeToggle />
        </div>

        {/* Mobile menu toggle & theme toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border text-[color:var(--text)] transition-colors hover:bg-[color:var(--bg-elevated)]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

        {/* Mobile Nav Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-20 left-0 right-0 z-40 md:hidden glass rounded-3xl p-5 mt-2 space-y-3 animate-in fade-in slide-in-from-top-5 duration-300 mx-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-[color:var(--text)] hover:text-[color:var(--primary)] transition-colors px-3 py-2 rounded-xl hover:bg-[color:var(--bg-elevated)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
