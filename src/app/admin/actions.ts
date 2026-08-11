"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api";

export type LoginState = { error?: string };

export async function login(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    cache: "no-store",
  }).catch(() => null);

  if (!res || !res.ok) {
    return { error: "Sign-in failed. Check your email and password." };
  }

  const { data } = await res.json();
  const store = await cookies();
  store.set("bnn_admin_token", data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 8,
    path: "/",
  });
  redirect("/admin/dashboard");
}

export async function logout() {
  const store = await cookies();
  store.delete("bnn_admin_token");
  redirect("/admin");
}

export async function getAdminData(path: string) {
  const store = await cookies();
  const token = store.get("bnn_admin_token")?.value;
  if (!token) redirect("/admin");
  const res = await fetch(`${API_URL}${path}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  }).catch(() => null);
  if (!res || res.status === 401) redirect("/admin");
  if (!res.ok) return [];
  const json = await res.json();
  return json.data ?? [];
}
