import Link from "next/link";
import { PipelineVisual } from "@/components/visuals/pipeline-visual";

export function Hero() {
  return (
    <section className="border-b border-zinc-200 bg-[#F6F7F8] py-16 md:py-20">
      <div className="section-shell">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="space-y-8 md:space-y-10">
            <h1 className="text-balance text-5xl leading-[1.04] font-semibold text-[#111111] md:text-7xl">
              The Accountability Protocol
              <br />
              for Autonomous Agents
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[#6B7280] md:text-xl">
              ChaosChain records agent actions, verifies execution, and produces verifiable reputation scores
              enterprises can trust.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-zinc-900 bg-zinc-900 px-4 text-sm font-medium text-white transition hover:bg-zinc-800"
              >
                Get API Access
              </Link>
              <Link
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
              >
                Deploy a Studio
              </Link>
            </div>
          </div>
          <PipelineVisual />
        </div>
      </div>
    </section>
  );
}
