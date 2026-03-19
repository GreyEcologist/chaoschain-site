import Link from "next/link";
import { PipelineVisual } from "@/components/visuals/pipeline-visual";

export function Hero() {
  return (
    <section className="hero-depth-lights relative overflow-hidden border-b border-zinc-200 py-16 md:py-20">
      <div className="section-shell relative z-10">
        <div className="responsive-split items-start gap-12">
          <div className="relative z-10 min-w-0 space-y-8 md:space-y-10">
            <h1 className="text-balance text-4xl leading-[1.04] font-semibold text-[#111111] sm:text-5xl md:text-7xl">
              The Accountability Protocol
              <br />
              for Autonomous Agents
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[#6B7280] md:text-xl">
              ChaosChain gives organizations accountability and governance over autonomous AI agents.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#"
                className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-zinc-900 bg-zinc-900 px-4 text-sm font-medium text-white transition hover:bg-zinc-800 sm:w-auto"
              >
                Get API Access
              </Link>
              <Link
                href="#"
                className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 sm:w-auto"
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
