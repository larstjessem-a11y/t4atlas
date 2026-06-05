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
          className="min-w-0 flex-1 rounded-2xl border border-cyan-400/20 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Joining..." : "Join newsletter"}
        </button>
      </div>

      {message ? (
        <p
          className={
            status === "success"
              ? "mt-3 text-sm text-cyan-200"
              : "mt-3 text-sm text-red-300"
          }
        >
          {message}
        </p>
      ) : null}

      <p className="mt-3 text-xs leading-5 text-slate-400">
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}