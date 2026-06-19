export default function Footer() {
  return (
    <footer className="w-full mt-auto border-t border-[color:var(--border)] py-8 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto">
      <div className="glass rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs sm:text-sm text-[color:var(--muted)]">
        <div>
          <p className="font-semibold text-[color:var(--text)]">
            Nguyễn Hồ Đức Huy &copy; {new Date().getFullYear()}
          </p>
          <p className="mt-1">
            Sinh viên năm cuối &bull; Khoa Công nghệ Thông tin &bull; Đại học Đà Lạt
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-xs">
          <span>Niên khóa: 2022 — 2026</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>Lớp: CTK46</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>Chuyên ngành: Công nghệ thông tin</span>
        </div>
      </div>
    </footer>
  );
}
