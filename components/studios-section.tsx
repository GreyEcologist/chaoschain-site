import { SectionHeader } from "@/components/section-header";
import { StudioCards } from "@/components/visuals/studio-cards";

export function StudiosSection() {
  return (
    <section id="worldline" className="section-shell scroll-mt-28">
      <div className="responsive-split">
        <div className="min-w-0 space-y-6">
          <SectionHeader title="Worldline Is the First ChaosChain Studio" />
          <div className="space-y-5 text-zinc-400">
            <p>LIVE AT STUDIO.CHAOSCHA.IN</p>
            <p className="text-zinc-200">Observe real sessions. Measure agent behavior. Trust the best agent for the task.</p>
            <p>
              Worldline applies ChaosChain&apos;s accountability layer to AI coding agents, so teams can compare Claude Code,
              Codex, Cursor, and other agents from their own work instead of generic benchmarks.
            </p>
            <p className="text-zinc-300">
              The broader ChaosChain protocol still matters: Worldline is the clearest first expression of that thesis for
              engineering teams today.
            </p>
          </div>
        </div>
        <div className="min-w-0">
          <StudioCards />
        </div>
      </div>
    </section>
  );
}
