"use client";

import { useActionState } from "react";
import { login } from "./actions";

export default function AdminLoginPage() {
  const [state, action, pending] = useActionState(login, {});

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center px-4 py-16">
      <h1 className="text-3xl font-bold">Admin sign in</h1>
      <div className="kente-band kente-band--thin mt-4 max-w-32" aria-hidden="true" />
      <form action={action} className="mt-8 grid gap-5">
        <div>
          <label htmlFor="a-email">Email</label>
          <input id="a-email" name="email" type="email" className="field" required autoComplete="username" />
        </div>
        <div>
          <label htmlFor="a-pass">Password</label>
          <input id="a-pass" name="password" type="password" className="field" required autoComplete="current-password" />
        </div>
        {state.error && (
          <p role="alert" className="border-2 border-clay bg-clay/10 p-3 text-sm font-semibold text-clay">
            {state.error}
          </p>
        )}
        <button type="submit" disabled={pending} className="btn btn-forest w-fit disabled:opacity-60">
          {pending ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </section>
  );
}
