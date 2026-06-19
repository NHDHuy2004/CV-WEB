/**
 * Supabase helper functions with graceful localStorage fallbacks.
 * This ensures the portfolio works offline, under network restrictions, or if
 * the Supabase tables are not yet set up.
 */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://btauvatifjoeoxgwixcu.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const getHeaders = () => ({
  "apikey": SUPABASE_ANON_KEY,
  "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
  "Content-Type": "application/json",
  "Prefer": "return=representation"
});

// Safe localStorage access wrapper
const isClient = typeof window !== "undefined";

const getLocalLikes = (): Record<string, number> => {
  if (!isClient) return {};
  try {
    const raw = localStorage.getItem("portfolio_likes");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const setLocalLikes = (likes: Record<string, number>) => {
  if (!isClient) return;
  try {
    localStorage.setItem("portfolio_likes", JSON.stringify(likes));
  } catch (e) {
    console.error("Failed to save likes to localStorage:", e);
  }
};

/**
 * Submit contact form message.
 * Saves to Supabase 'contacts' table or falls back to localStorage messages array.
 */
export async function submitContactForm(
  name: string,
  email: string,
  message: string
): Promise<{ success: boolean; error?: string }> {
  const payload = { name, email, message, created_at: new Date().toISOString() };

  try {
    if (!SUPABASE_ANON_KEY) {
      throw new Error("Supabase API key is missing");
    }

    const res = await fetch(`${SUPABASE_URL}/rest/v1/contacts`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.message || `HTTP error! status: ${res.status}`);
    }

    return { success: true };
  } catch (err: any) {
    console.warn("Supabase submitContactForm failed, falling back to localStorage. Error:", err.message);

    // Local Storage Fallback
    if (isClient) {
      try {
        const localMsgs = localStorage.getItem("portfolio_messages");
        const messages = localMsgs ? JSON.parse(localMsgs) : [];
        messages.push(payload);
        localStorage.setItem("portfolio_messages", JSON.stringify(messages));
        return { success: true };
      } catch (e: any) {
        return { success: false, error: e.message };
      }
    }

    return { success: false, error: err.message || "Unknown network error" };
  }
}

/**
 * Get likes count for a specific page/slug.
 * Queries Supabase 'likes' table, falling back to localStorage.
 */
export async function getLikesCount(slug: string): Promise<number> {
  try {
    if (!SUPABASE_ANON_KEY) {
      throw new Error("Supabase API key is missing");
    }

    const res = await fetch(`${SUPABASE_URL}/rest/v1/likes?slug=eq.${encodeURIComponent(slug)}&select=count`, {
      method: "GET",
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    if (data && data.length > 0) {
      return data[0].count || 0;
    }

    return 0;
  } catch (err: any) {
    // Fallback to local storage count
    const local = getLocalLikes();
    return local[slug] || 0;
  }
}

/**
 * Increment likes count for a specific page/slug.
 * Attempts to upsert/increment in Supabase 'likes' table, falling back to localStorage.
 */
export async function incrementLikesCount(slug: string): Promise<number> {
  // Update local storage first (optimistic UI update support)
  const local = getLocalLikes();
  const currentLocalCount = local[slug] || 0;
  const newCount = currentLocalCount + 1;
  local[slug] = newCount;
  setLocalLikes(local);

  try {
    if (!SUPABASE_ANON_KEY) {
      throw new Error("Supabase API key is missing");
    }

    // First check if the slug row exists
    const selectRes = await fetch(`${SUPABASE_URL}/rest/v1/likes?slug=eq.${encodeURIComponent(slug)}`, {
      method: "GET",
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });

    if (!selectRes.ok) {
      throw new Error(`Select request failed: ${selectRes.status}`);
    }

    const existingRows = await selectRes.json();

    let res;
    if (existingRows && existingRows.length > 0) {
      // Update existing
      const nextCount = (existingRows[0].count || 0) + 1;
      res = await fetch(`${SUPABASE_URL}/rest/v1/likes?slug=eq.${encodeURIComponent(slug)}`, {
        method: "PATCH",
        headers: getHeaders(),
        body: JSON.stringify({ count: nextCount }),
      });
      if (res.ok) return nextCount;
    } else {
      // Insert new row
      res = await fetch(`${SUPABASE_URL}/rest/v1/likes`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ slug, count: 1 }),
      });
      if (res.ok) return 1;
    }

    throw new Error("Failed to write to Supabase table");
  } catch (err: any) {
    console.warn("Supabase incrementLikesCount failed, using local count:", newCount, "Error:", err.message);
    return newCount;
  }
}
