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
    <FlowCard mode="solution" title="WITH CHAOSCHAIN">
      <NodeBox mode="solution" className="max-w-[26rem]">
        Enterprise
      </NodeBox>
      <RailConnector mode="solution" />
      <NodeBox mode="solution" className="max-w-[26rem]">
        AI Agent
      </NodeBox>
      <RailConnector mode="solution" />
      <DetailPanel
        mode="solution"
        title="ChaosChain Accountability Layer"
        bullets={["Records every action", "Verifies execution", "Scores performance", "Builds reputation"]}
        className="max-w-[26rem] text-center"
      />
      <RailConnector mode="solution" />
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
