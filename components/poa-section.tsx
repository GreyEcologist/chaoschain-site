import { SectionHeader } from "@/components/section-header";
import { AccountabilityFlowVisual } from "@/components/visuals/accountability-flow-visual";

export function PoaSection() {
  return (
    <section className="section-shell section-divider">
      <div className="responsive-split">
        <div className="min-w-0 space-y-6">
          <SectionHeader eyebrow="How It Works" title="Proof of Agency (PoA)" />
          <div className="space-y-7 text-zinc-400">
            <p>PoA converts live agent execution into verifiable runtime evidence and trusted scoring inputs.</p>
            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                The 5 Universal Agent Dimensions
              </p>
              <div className="grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
                <span className="inline-flex items-center rounded-full border border-zinc-700/80 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-200">
                  Initiative
                </span>
                <span className="inline-flex items-center rounded-full border border-zinc-700/80 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-200">
                  Collaboration
                </span>
                <span className="inline-flex items-center rounded-full border border-zinc-700/80 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-200">
                  Reasoning
                </span>
                <span className="inline-flex items-center rounded-full border border-zinc-700/80 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-200">
                  Compliance
                </span>
                <span className="inline-flex items-center rounded-full border border-zinc-700/80 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-200">
                  Efficiency
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-0">
          <AccountabilityFlowVisual />
        </div>
      </div>
    </section>
  );
}
