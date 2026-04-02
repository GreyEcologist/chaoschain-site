"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ContactModal } from "@/components/contact-section";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    cta: "Get Started",
    href: "https://studio.chaoscha.in/start",
    opensContact: false,
    accent: false,
    features: [
      "Local dev access",
      "Core docs and examples",
      "Single workspace setup",
      "Community support",
    ],
  },
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    cta: "Get Started",
    href: "",
    opensContact: true,
    accent: false,
    features: [
      "Hosted trust scoring",
      "Up to 3 active agents",
      "Basic runtime history",
      "Portable reputation output",
    ],
  },
  {
    name: "Team",
    price: "$199",
    period: "/mo",
    cta: "Get Started",
    href: "",
    opensContact: true,
    accent: true,
    features: [
      "Shared org workspace",
      "Verifier consensus views",
      "Policy and scoring controls",
      "Team-level reputation API",
    ],
  },
] as const;

const enterpriseFeatures = [
  "Custom verifier topology",
  "Dedicated policy controls",
  "Private reputation surfaces",
  "SSO and role-based access",
  "Priority onboarding",
  "Custom integration support",
] as const;

type PricingSectionProps = {
  standalone?: boolean;
};

export function PricingSection({ standalone = false }: PricingSectionProps) {
  const [contactSource, setContactSource] = useState<string | null>(null);

  return (
    <>
      <section
        id="pricing"
        className={`section-shell ${standalone ? "py-18 md:py-24" : "scroll-mt-28 py-14 md:py-18"}`}
      >
        <div className="space-y-8 md:space-y-10">
          <div className={`space-y-4 ${standalone ? "max-w-4xl" : "max-w-3xl"}`}>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">Pricing</p>
            <h2 className="text-balance text-3xl leading-tight font-semibold text-zinc-100 md:text-5xl">
              Pay for trusted agent performance - not API calls.
            </h2>
            {standalone ? (
              <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
                Choose the trust layer that fits your agent stack today, from local development to shared team
                infrastructure and enterprise policy controls.
              </p>
            ) : null}
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className={`rounded-[1.6rem] border p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.015)] md:p-6 ${
                  tier.accent
                    ? "border-cyan-700/40 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),rgba(10,10,14,0.98)_40%),linear-gradient(180deg,rgba(18,20,28,0.96),rgba(9,10,14,0.99))]"
                    : "border-zinc-800/90 bg-[linear-gradient(180deg,rgba(22,22,28,0.94),rgba(10,10,14,0.98))]"
                }`}
                initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex min-h-full flex-col">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{tier.name}</p>
                      {tier.accent ? (
                        <span className="rounded-full border border-cyan-500/25 bg-cyan-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-cyan-200">
                          Most Active
                        </span>
                      ) : null}
                    </div>
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-semibold tracking-tight text-zinc-100">{tier.price}</span>
                      <span className="pb-1 text-sm text-zinc-500">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-300">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/70" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-2">
                    {tier.opensContact ? (
                      <button
                        type="button"
                        onClick={() => setContactSource(tier.name)}
                        className={`inline-flex h-11 w-full items-center justify-center rounded-xl border px-4 text-sm font-medium transition ${
                          tier.accent
                            ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-100 hover:bg-cyan-400/15"
                            : "border-zinc-700 bg-zinc-900 text-zinc-100 hover:bg-zinc-800"
                        }`}
                      >
                        {tier.cta}
                      </button>
                    ) : (
                      <Link
                        href={tier.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 px-4 text-sm font-medium text-zinc-100 transition hover:bg-zinc-800"
                      >
                        {tier.cta}
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        <motion.div
          className="rounded-[1.7rem] border border-cyan-800/25 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.07),rgba(12,14,20,0.98)_46%),linear-gradient(180deg,rgba(18,20,28,0.96),rgba(10,10,14,0.99))] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.015)] md:p-7"
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Enterprise</p>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-semibold tracking-tight text-zinc-100">Custom</span>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
              For teams running policy-sensitive agents, custom verifier flows, and private trust infrastructure.
            </p>
          </div>

          <div className="mt-6 grid gap-3 text-sm text-zinc-300 md:grid-cols-2">
            {enterpriseFeatures.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/70" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-start md:justify-end">
            <button
              type="button"
              onClick={() => setContactSource("Enterprise")}
              className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-cyan-500/25 bg-cyan-500/10 px-4 text-sm font-medium text-cyan-100 transition hover:bg-cyan-500/15 md:w-auto"
            >
              Book a Call
            </button>
          </div>
        </motion.div>

        <motion.div
          className="rounded-[1.7rem] border border-cyan-800/30 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),rgba(12,14,20,0.98)_46%),linear-gradient(180deg,rgba(18,20,28,0.96),rgba(10,10,14,0.99))] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.015)] md:p-7"
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.08, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Pilot Offer</p>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-semibold tracking-tight text-zinc-100">$2k-$5k</span>
                <span className="pb-1 text-sm text-zinc-500">one-time</span>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
                White-glove onboarding, live runtime review, and a concrete recommendation on where trust infrastructure
                should sit in your stack.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setContactSource("Pilot")}
              className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-cyan-500/25 bg-cyan-500/10 px-4 text-sm font-medium text-cyan-100 transition hover:bg-cyan-500/15 md:w-auto"
            >
              Run a Pilot
            </button>
          </div>
        </motion.div>
        </div>
      </section>

      <ContactModal
        isOpen={contactSource !== null}
        onClose={() => setContactSource(null)}
        sourceLabel={contactSource ?? ""}
      />
    </>
  );
}
