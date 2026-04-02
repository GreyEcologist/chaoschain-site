"use client";

import {
  DetailPanel,
  FlowCard,
  HeroOutcomeBox,
  NodeBox,
  RailConnector,
} from "@/components/visuals/trust-flow-shared";

export function ProblemTrustVisual() {
  return (
    <FlowCard
      mode="problem"
      title="TODAY"
      contentClassName="mt-3 gap-3 md:mt-4 md:gap-3.5"
    >
      <NodeBox mode="problem" className="max-w-[24rem] py-2.5">
        AI Agent
      </NodeBox>
      <RailConnector mode="problem" compact />
      <DetailPanel
        mode="problem"
        title="Black Box Behavior"
        bullets={["Opaque execution", "No verifiable history", "No accountability", "No reputation"]}
        className="max-w-[24rem] text-center md:px-5 md:py-5"
      />
      <RailConnector mode="problem" compact />
      <HeroOutcomeBox
        mode="problem"
        title="🔴 Trust Failure"
        lines={["Capital cannot be safely delegated"]}
        className="max-w-[24rem] text-center md:px-5 md:py-4"
      />
    </FlowCard>
  );
}
