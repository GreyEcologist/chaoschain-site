import { SectionHeader } from "@/components/section-header";
import { StudioCards } from "@/components/visuals/studio-cards";

export function StudiosSection() {
  return (
    <section className="section-shell section-divider">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="space-y-6">
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
        <StudioCards />
      </div>
    </section>
  );
}
