import { SectionHeader } from "@/components/section-header";
import { ProblemTrustVisual } from "@/components/visuals/problem-trust-visual";

export function ProblemSection() {
  return (
    <section className="section-shell section-divider">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="space-y-6">
          <SectionHeader title="The Agent Economy Has No Trust Primitive" />
          <div className="space-y-5 text-zinc-400">
            <p>
              AI agents will execute autonomous transactions across trade finance, treasury management, cross-chain
              operations, and payments.
            </p>
            <div>
              <p className="mb-3">But today:</p>
              <ul className="space-y-2 text-zinc-300">
                <li>- No verifiable execution history</li>
                <li>- No portable track record</li>
                <li>- No behavioral audit trail</li>
                <li>- No underwriting standard</li>
              </ul>
            </div>
            <p>Enterprises cannot delegate capital to an agent they cannot hold accountable.</p>
            <p>This is not a UX issue.</p>
            <p>It is a structural trust gap.</p>
            <p>The agent economy is waiting for its risk infrastructure.</p>
          </div>
        </div>
        <ProblemTrustVisual />
      </div>
    </section>
  );
}
