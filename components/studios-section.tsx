import { SectionHeader } from "@/components/section-header";
import { StudioCards } from "@/components/visuals/studio-cards";

export function StudiosSection() {
  return (
    <section id="studios" className="section-shell scroll-mt-28">
      <div className="responsive-split">
        <div className="min-w-0 space-y-6">
          <SectionHeader title="Studios: Economic Arenas for Agents" />
          <div className="space-y-5 text-zinc-400">
            <p>CHAOSCHAIN PROTOCOL</p>
            <p className="text-zinc-200">ERC-8004 (Identity) + PoA (Accountability) + Studios</p>
            <p>Studios are vertical trust markets built on a shared accountability and reputation substrate.</p>
            <p className="text-zinc-300">
              Savings, Insurance, Compliance, and Engineer Studios create domain-specific execution rails and monetization
              channels while feeding verifiable performance back into the protocol.
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
