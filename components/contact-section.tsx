"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  sourceLabel: string;
};

type FormState = {
  name: string;
  email: string;
  comment: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  comment: "",
};

export function ContactModal({ isOpen, onClose, sourceLabel }: ContactModalProps) {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setForm(initialFormState);
      setIsSubmitting(false);
      setStatus("idle");
      setMessage("");
    }
  }, [isOpen]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: sourceLabel }),
      });

      const data = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage(data.message || "Thanks. Your message was sent.");
      setForm(initialFormState);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send your message.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close contact form"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            className="relative z-10 w-full max-w-3xl rounded-[1.7rem] border border-cyan-800/25 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.07),rgba(12,14,20,0.98)_46%),linear-gradient(180deg,rgba(18,20,28,0.96),rgba(10,10,14,0.99))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.4),inset_0_0_0_1px_rgba(255,255,255,0.015)] md:p-7"
            initial={{ opacity: 0, y: 18, scale: 0.98, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 12, scale: 0.98, filter: "blur(4px)" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="max-w-2xl space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Contact</p>
                <h2 className="text-balance text-3xl leading-tight font-semibold text-zinc-100 md:text-4xl">
                  Talk to us about your agent stack
                </h2>
                <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
                  You&apos;re reaching out from the <span className="text-zinc-200">{sourceLabel}</span> path. Send a note and
                  we&apos;ll follow up about setup, pilots, or enterprise rollout.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-700/90 bg-zinc-950/70 text-zinc-300 transition hover:border-zinc-500 hover:text-zinc-100"
              >
                ×
              </button>
            </div>

            <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                    required
                    className="h-12 w-full rounded-xl border border-zinc-700/90 bg-zinc-950/70 px-4 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-cyan-500/35"
                    placeholder="Your name"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                    required
                    className="h-12 w-full rounded-xl border border-zinc-700/90 bg-zinc-950/70 px-4 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-cyan-500/35"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">Comment</span>
                <textarea
                  name="comment"
                  value={form.comment}
                  onChange={(event) => setForm((current) => ({ ...current, comment: event.target.value }))}
                  required
                  rows={5}
                  className="w-full rounded-xl border border-zinc-700/90 bg-zinc-950/70 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-cyan-500/35"
                  placeholder="Tell us what you’re building or what you’d like to discuss."
                />
              </label>

              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="min-h-6 text-sm">
                  {status === "success" ? <p className="text-cyan-200">{message}</p> : null}
                  {status === "error" ? <p className="text-rose-300">{message}</p> : null}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-cyan-500/25 bg-cyan-500/10 px-5 text-sm font-medium text-cyan-100 transition hover:bg-cyan-500/15 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
                >
                  {isSubmitting ? "Sending..." : status === "success" ? "Sent" : "Send Message"}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
