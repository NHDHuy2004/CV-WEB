"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { getLikesCount, incrementLikesCount } from "@/src/lib/supabase";

interface LikeButtonProps {
  slug?: string;
}

export default function LikeButton({ slug = "general" }: LikeButtonProps) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user has liked this slug before
    const checkLikedStatus = () => {
      try {
        const likedSlugs = JSON.parse(localStorage.getItem("liked_pages") || "[]");
        setLiked(likedSlugs.includes(slug));
      } catch {
        setLiked(false);
      }
    };

    const fetchLikes = async () => {
      setLoading(true);
      const likesCount = await getLikesCount(slug);
      setCount(likesCount);
      setLoading(false);
    };

    checkLikedStatus();
    fetchLikes();
  }, [slug]);

  const handleLike = async () => {
    if (liked) return; // Prevent double liking/spamming

    setLiked(true);
    setCount((prev) => prev + 1);

    // Save liked status to local storage
    try {
      const likedSlugs = JSON.parse(localStorage.getItem("liked_pages") || "[]");
      if (!likedSlugs.includes(slug)) {
        likedSlugs.push(slug);
        localStorage.setItem("liked_pages", JSON.stringify(likedSlugs));
      }
    } catch (e) {
      console.error(e);
    }

    // Call API to increment in DB
    const finalCount = await incrementLikesCount(slug);
    setCount(finalCount);
  };

  return (
    <button
      onClick={handleLike}
      disabled={liked || loading}
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold transition-all duration-300 ${
        liked
          ? "bg-rose-500/10 border-rose-500/30 text-rose-500 hover:scale-100"
          : "bg-[color:var(--bg-elevated)] border-[color:var(--border)] text-[color:var(--muted)] hover:text-rose-500 hover:border-rose-500/40 hover:-translate-y-0.5"
      } active:scale-95 disabled:opacity-90`}
    >
      <Heart
        size={18}
        className={`transition-transform duration-300 ${
          liked ? "fill-rose-500 scale-110 animate-ping-once" : ""
        }`}
      />
      <span>
        {loading ? (
          <span className="inline-block h-3 w-8 animate-pulse rounded bg-[color:var(--muted)]/20" />
        ) : (
          `${count} lượt thích`
        )}
      </span>
    </button>
  );
}
