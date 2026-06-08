"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok && data.ok) {
      setStatus("success");
      setMessage(data.message ?? "You're subscribed.");
      setEmail("");
      return;
    }

    setStatus("error");
    setMessage(data.message ?? "Could not subscribe.");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email address"
          className="min-w-0 flex-1 rounded-2xl border border-[var(--t4-border)] bg-white/80 px-4 py-3 text-sm text-[var(--t4-text)] placeholder:text-[var(--t4-muted)] outline-none transition focus:border-[#1e3a5f]/50 focus:bg-white"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-2xl bg-[var(--t4-blue)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#162d49] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Joining..." : "Join newsletter"}
        </button>
      </div>

      {message ? (
        <p
          className={
            status === "success"
              ? "mt-3 text-sm text-[#1e3a5f]"
              : "mt-3 text-sm text-red-700"
          }
        >
          {message}
        </p>
      ) : null}

      <p className="mt-3 text-xs leading-5 text-[var(--t4-muted)]">
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}