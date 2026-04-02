"use client";

import {
  DetailPanel,
  FlowCard,
  HeroOutcomeBox,
  NodeBox,
  RailConnector,
} from "@/components/visuals/trust-flow-shared";

export function SolutionTrustVisual() {
  return (
    <FlowCard mode="solution" title="WITH CHAOSCHAIN" contentClassName="mt-4 gap-3 md:mt-5 md:gap-3.5">
      <NodeBox mode="solution" className="max-w-[26rem]">
        AI Agent
      </NodeBox>
      <RailConnector mode="solution" compact />
      <DetailPanel
        mode="solution"
        title="ChaosChain Accountability Layer"
        bullets={["Records every action", "Verifies execution", "Scores performance", "Builds reputation"]}
        className="max-w-[26rem] text-center"
      />
      <RailConnector mode="solution" compact />
      <HeroOutcomeBox
        mode="solution"
        title="🟢 Trusted Agent Profile"
        lines={[
          "• Trusted history",
          "• Verifiable performance",
          "• Capital-ready agent",
          "• Rule-bound execution",
        ]}
        className="max-w-[26rem] text-center"
      />
    </FlowCard>
  );
}
