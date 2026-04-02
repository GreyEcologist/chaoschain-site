import type { Metadata } from "next";
import { PricingSection } from "@/components/pricing-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "ChaosChain Pricing | Trust Infrastructure For Autonomous Agents",
  description: "Pricing for ChaosChain trust infrastructure, team agent accountability, and enterprise policy controls.",
};

export default function PricingPage() {
  return (
    <main className="relative overflow-x-clip">
      <div className="page-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="relative pt-6 md:pt-8 bg-[linear-gradient(180deg,rgba(14,15,19,0.98),rgba(9,10,14,1))]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.05),transparent_34%),linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:auto,40px_40px,40px_40px] opacity-70" />
        <SiteHeader theme="dark" />
        <div className="relative z-0">
          <PricingSection standalone />
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
