export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-10">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Main Content */}
        <div className="flex-1 w-full glass grain-card rounded-3xl p-6 sm:p-8">
          {children}
        </div>
        
        {/* Sidebar */}
        <aside className="hidden md:block w-64 shrink-0 glass grain-card rounded-3xl p-5">
          <div className="space-y-4">
            <h3 className="font-bold text-base text-[color:var(--text)] border-b border-[color:var(--border)] pb-2">
              Danh mục
            </h3>
            <ul className="space-y-2.5 text-sm text-[color:var(--muted)]">
              <li className="hover:text-[color:var(--primary)] cursor-pointer transition-colors">
                Công nghệ
              </li>
              <li className="hover:text-[color:var(--primary)] cursor-pointer transition-colors">
                Học tập
              </li>
              <li className="hover:text-[color:var(--primary)] cursor-pointer transition-colors">
                Dự án cá nhân
              </li>
              <li className="hover:text-[color:var(--primary)] cursor-pointer transition-colors">
                Cuộc sống
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
