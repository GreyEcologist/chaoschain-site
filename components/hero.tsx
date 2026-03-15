import Link from "next/link";
import { PipelineVisual } from "@/components/visuals/pipeline-visual";

export function Hero() {
  return (
    <section className="section-shell pt-24 md:pt-32">
      <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div className="space-y-10 md:space-y-12">
          <h1 className="text-balance text-5xl leading-[1.04] font-semibold text-zinc-100 md:text-7xl">
            The Accountability Protocol for Autonomous Agents
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            AI agents will move trillions in capital. ChaosChain makes them auditable, accountable, and underwritable.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="#" className="btn-primary">
              Get API Access
            </Link>
            <Link href="#" className="btn-secondary">
              Deploy a Studio
            </Link>
          </div>
        </div>
        <PipelineVisual />
      </div>
    </section>
  );
}
