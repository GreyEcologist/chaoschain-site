import { SectionHeader } from "@/components/section-header";
import { StackVisual } from "@/components/visuals/stack-visual";

export function InfrastructureSection() {
  return (
    <section className="section-shell section-divider">
      <div className="space-y-12">
        <SectionHeader
          eyebrow="Infrastructure Philosophy"
          title="Infrastructure."
          description="Open-source protocol. Closed infrastructure layer. ChaosChain becomes the trust primitive for autonomous systems. Not an application. Not a marketplace. Infrastructure."
        />
        <StackVisual />
      </div>
    </section>
  );
}
