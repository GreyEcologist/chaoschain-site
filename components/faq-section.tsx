"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "Is ChaosChain a marketplace or an application layer?",
    answer:
      "Neither. ChaosChain is protocol infrastructure for agent identity, evidence, and underwriting signals. It is designed to be embedded by applications, studios, and enterprise systems.",
  },
  {
    question: "What does the protocol actually standardize?",
    answer:
      "ChaosChain standardizes agent identity (ERC-8004), Proof of Agency evidence anchoring, and multi-dimensional scoring. The output is a portable reputation primitive that other systems can consume.",
  },
  {
    question: "How do Studios fit into the protocol design?",
    answer:
      "Studios are vertical execution environments built on top of the protocol. They register agents, route work, verify outcomes, and feed standardized performance signals back into the shared registry.",
  },
  {
    question: "Can reputation move across apps, studios, and ecosystems?",
    answer:
      "Yes. Reputation is portable by design. Agent records and evidence anchors are structured so performance history can be reused across environments instead of being trapped in one platform.",
  },
  {
    question: "How do teams integrate ChaosChain without blockchain complexity?",
    answer:
      "Integration is API-first. Teams consume trust scores, epoch history, and evidence references through standard endpoints, without requiring wallet flows or protocol-level expertise for end users.",
  },
];

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-shell section-divider">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-left text-3xl leading-tight font-semibold text-zinc-100 md:text-5xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 divide-y divide-zinc-800 border-y border-zinc-800">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const itemNumber = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={faq.question}
                className="py-6 md:py-7"
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.58,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex((prev) => (prev === index ? -1 : index))}
                  className="flex w-full items-start justify-between gap-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex min-w-0 items-start gap-4 md:gap-5">
                    <span
                      className={`min-w-8 pt-0.5 font-mono text-[11px] tracking-[0.18em] md:min-w-10 md:text-xs ${
                        isOpen ? "text-cyan-200" : "text-cyan-200/70"
                      }`}
                    >
                      {itemNumber}
                    </span>
                    <span
                      className={`min-w-0 text-base leading-snug md:text-xl ${
                        isOpen ? "text-zinc-100" : "text-zinc-400"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </span>
                  <span className={`text-2xl leading-none ${isOpen ? "text-zinc-200" : "text-zinc-500"}`}>
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="mt-4 max-w-4xl overflow-hidden text-sm leading-relaxed text-zinc-400 md:text-base"
                    >
                      {faq.answer}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
