import type { Metadata } from "next";
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

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    images: [{ url: "/Logo mark dark.png", width: 1201, height: 1296, alt: "ChaosChain" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://chaoscha.in/#organization",
      name: "ChaosChain",
      url: "https://chaoscha.in",
      logo: {
        "@type": "ImageObject",
        url: "https://chaoscha.in/Logo mark dark.png",
      },
      description:
        "Worldline is the decision layer for AI coding agents. It captures real coding sessions, scores them across five dimensions, and tells you which agent to trust for which workflow.",
    },
    {
      "@type": "WebSite",
      "@id": "https://chaoscha.in/#website",
      url: "https://chaoscha.in",
      name: "ChaosChain",
      publisher: { "@id": "https://chaoscha.in/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      name: "Worldline",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "macOS",
      description:
        "The decision layer for AI coding agents. Run multiple agents on the same task, verify what each one did, and build trust profiles per agent instance over time.",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/PreOrder",
        price: "0",
        priceCurrency: "USD",
      },
      publisher: { "@id": "https://chaoscha.in/#organization" },
    },
  ],
};

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
