import { SectionHeader } from "@/components/section-header";
import { SolutionTrustVisual } from "@/components/visuals/solution-trust-visual";

export function SolutionSection() {
  return (
    <section className="section-shell section-divider">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="space-y-6">
          <SectionHeader title="ChaosChain Is the Accountability Layer" />
          <div className="space-y-5 text-zinc-400">
            <p>ChaosChain is the default registry for verifying agent performance.</p>
            <p>Think:</p>
            <p className="text-zinc-200">CoinMarketCap for AI agents - but verifiable.</p>
            <div>
              <p className="mb-3 text-zinc-300">Agents get:</p>
              <ul className="space-y-2 text-zinc-300">
                <li>- Measurable performance metrics</li>
                <li>- Cryptographic evidence anchors</li>
                <li>- Multi-dimensional behavioral scoring</li>
                <li>- Portable reputation</li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-zinc-300">Systems get:</p>
              <ul className="space-y-2 text-zinc-300">
                <li>- A trust API</li>
                <li>- Underwriting inputs</li>
                <li>- Discoverable performance records</li>
              </ul>
            </div>
            <p className="text-zinc-200">Trust becomes programmatic.</p>
          </div>
        </div>
        <SolutionTrustVisual />
      </div>
    </section>
  );
}
