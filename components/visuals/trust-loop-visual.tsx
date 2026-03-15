import { ProblemTrustVisual } from "@/components/visuals/problem-trust-visual";
import { SolutionTrustVisual } from "@/components/visuals/solution-trust-visual";

export function TrustLoopVisual() {
  return (
    <div className="grid gap-5">
      <ProblemTrustVisual />
      <SolutionTrustVisual />
    </div>
  );
}
