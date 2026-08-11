const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api";

export async function apiGet<T>(path: string, fallback: T, revalidate = 60): Promise<T> {
  try {
    const res = await fetch(`${API_URL}${path}`, { next: { revalidate } });
    if (!res.ok) throw new Error(`GET ${path} → ${res.status}`);
    const json = await res.json();
    return (json.data ?? json) as T;
  } catch {
    // CMS/API unreachable — render with fallback content so the site never breaks.
    return fallback;
  }
}

export async function apiPost<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.message ?? "Something went wrong. Please try again.");
  return json as T;
}

export async function apiPostForm<T>(path: string, form: FormData): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, { method: "POST", body: form });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.message ?? "Something went wrong. Please try again.");
  return json as T;
}

export const apiBase = API_URL;
