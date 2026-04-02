import Link from "next/link";
import { PipelineVisual } from "@/components/visuals/pipeline-visual";
import { SiteHeader } from "@/components/site-header";

export function Hero() {
  return (
    <section className="hero-depth-lights relative overflow-hidden border-b border-zinc-200 py-6 md:py-8">
      <SiteHeader />
      <div className="section-shell relative z-10">
        <div className="responsive-split items-start gap-12 pt-12 md:pt-16">
          <div className="relative z-10 min-w-0 space-y-5 md:space-y-6">
            <h1 className="max-w-[11.5ch] text-4xl leading-[0.95] font-semibold text-[#111111] sm:max-w-[10.75ch] sm:text-5xl md:max-w-[10ch] md:text-[4.8rem]">
              The Accountability Protocol for Autonomous Agents
            </h1>
            <p className="max-w-[34rem] text-lg leading-relaxed text-[#6B7280] md:text-[1.15rem]">
              ChaosChain gives organizations accountability and governance over autonomous AI agents.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="https://github.com/ChaosChain/chaoschain"
                className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-zinc-900 bg-zinc-900 px-4 text-sm font-medium text-white transition hover:bg-zinc-800 sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Building
              </Link>
              <Link
                href="https://studio.chaoscha.in/"
                className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Studios
              </Link>
            </div>
          </div>
          <PipelineVisual />
        </div>
      </div>
    </section>
  );
}
