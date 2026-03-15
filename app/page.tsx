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
      <div className="section-shell pt-6 md:pt-8">
        <Image src="/Logo light.png" alt="ChaosChain" width={360} height={40} className="h-5 w-auto md:h-7" priority />
      </div>
      <Hero />
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
