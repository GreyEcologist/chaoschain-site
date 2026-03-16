import Image from "next/image";
import { AgentsActionSection } from "@/components/agents-action-section";
import { FaqSection } from "@/components/faq-section";
import { Hero } from "@/components/hero";
import { PoaSection } from "@/components/poa-section";
import { ProblemSection } from "@/components/problem-section";
import { SiteFooter } from "@/components/site-footer";
import { SolutionSection } from "@/components/solution-section";
import { StudiosSection } from "@/components/studios-section";

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <div className="page-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="relative overflow-hidden bg-[#F6F7F8]">
        <Image
          src="/Logo mark dark.png"
          alt=""
          aria-hidden="true"
          width={1200}
          height={1200}
          className="hero-monument-mark-global pointer-events-none select-none"
          priority
        />
        <div className="section-shell relative z-10 pt-6 md:pt-8">
          <div className="logo-signal-wrap" aria-label="ChaosChain">
            <span className="logo-signal-row logo-signal-row-1" aria-hidden="true" />
            <span className="logo-signal-row logo-signal-row-2" aria-hidden="true" />
            <span className="logo-signal-row logo-signal-row-3" aria-hidden="true" />
            <span className="logo-signal-row logo-signal-row-4" aria-hidden="true" />
            <Image
              src="/Logo dark.png"
              alt="ChaosChain"
              width={360}
              height={40}
              className="relative z-10 h-5 w-auto md:h-7"
              priority
            />
          </div>
        </div>
        <Hero />
      </div>
      <ProblemSection />
      <SolutionSection />
      <StudiosSection />
      <PoaSection />
      <AgentsActionSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
