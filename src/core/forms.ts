"use client";

export type FormStatus = "idle" | "submitting" | "success" | "error";

export async function submitForm(
  type: "community" | "partner" | "join-team",
  fields: Record<string, string | boolean>
): Promise<{ ok: boolean; message: string }> {
  try {
    const res = await fetch("/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, fields }),
    });
    const data = await res.json();
    return { ok: res.ok, message: data.message ?? (res.ok ? "Submitted." : "Something went wrong.") };
  } catch {
    return {
      ok: false,
      message: "We couldn't reach the server. Check your connection and try again.",
    };
  }
}
