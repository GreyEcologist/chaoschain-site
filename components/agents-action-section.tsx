import { AgentsRuntimeVisual } from "@/components/visuals/agents-runtime-visual";

export function AgentsActionSection() {
  return (
    <section className="relative mt-20 border-y border-zinc-200 bg-zinc-50 py-16 md:mt-24 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(15,118,110,0.08),transparent_46%)]" />
      <div className="section-shell relative space-y-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Product Runtime</p>
          <h2 className="text-balance text-3xl leading-tight font-semibold text-zinc-900 md:text-5xl">
            From Action to Reputation
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-zinc-600 md:text-lg">
            ChaosChain turns live agent behavior into verifiable receipts, execution history, and continuously updated
            trust scores.
          </p>
        </div>

        <AgentsRuntimeVisual />
      </div>
    </section>
  );
}
