import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/src/data/posts";
import LikeButton from "@/src/components/like-button";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[color:var(--primary)] hover:underline mb-2"
      >
        <ArrowLeft size={14} /> Quay lại danh sách
      </Link>
      
      <article className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs border-b border-[color:var(--border)]/60 pb-4">
          <span className="inline-flex items-center gap-1 bg-[color:var(--primary)]/15 text-[color:var(--primary)] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            <Tag size={12} />
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-[color:var(--muted)]">
            <Calendar size={12} />
            {post.date}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[color:var(--text)] leading-tight">
          {post.title}
        </h1>

        <div className="prose dark:prose-invert max-w-none text-sm sm:text-base text-[color:var(--muted)] whitespace-pre-line leading-relaxed">
          {post.content}
        </div>

        <div className="border-t border-[color:var(--border)]/60 pt-6">
          <LikeButton slug={slug} />
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
