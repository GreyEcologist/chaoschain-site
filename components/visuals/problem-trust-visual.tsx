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
    <FlowCard mode="problem" title="TRUST GAP IN AI AGENTS" sectionLabel="TODAY">
      <NodeBox className="max-w-[26rem]">Enterprise</NodeBox>
      <RailConnector mode="problem" />
      <NodeBox className="max-w-[26rem]">AI Agent</NodeBox>
      <RailConnector mode="problem" />
      <DetailPanel
        mode="problem"
        title="Black Box Behavior"
        bullets={["Opaque execution", "No verifiable history", "No accountability", "No reputation"]}
        className="max-w-[26rem] text-center"
      />
      <RailConnector mode="problem" />
      <HeroOutcomeBox
        mode="problem"
        title="Trust Failure"
        lines={["Capital cannot be safely delegated"]}
        className="max-w-[26rem] text-center"
      />
    </FlowCard>
  );
}
