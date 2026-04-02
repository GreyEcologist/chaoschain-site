import Image from "next/image";
import ReputationFromWorkSection from "@/app/components/ReputationFromWorkSection";
import { AgentsActionSection } from "@/components/agents-action-section";
import { FaqSection } from "@/components/faq-section";
import { Hero } from "@/components/hero";
import { PoaSection } from "@/components/poa-section";
import { ProblemSection } from "@/components/problem-section";
import SectionSignalSeparator from "@/components/section-signal-separator";
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
        <Hero />
      </div>
      <ProblemSection />
      <SectionSignalSeparator />
      <SolutionSection />
      <SectionSignalSeparator />
      <ReputationFromWorkSection />
      <SectionSignalSeparator />
      <StudiosSection />
      <SectionSignalSeparator />
      <PoaSection />
      <AgentsActionSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
