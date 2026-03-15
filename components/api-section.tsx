import { SectionHeader } from "@/components/section-header";
import { ApiResponseVisual } from "@/components/visuals/api-response-visual";

export function ApiSection() {
  return (
    <section className="section-shell section-divider">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="space-y-6">
          <SectionHeader eyebrow="Accountability API" title="Reputation as a Service" />
          <p className="text-lg leading-relaxed text-zinc-400">
            No wallet required.
            <br />
            No blockchain knowledge required.
            <br />
            Just infrastructure.
          </p>
        </div>
        <ApiResponseVisual />
      </div>
    </section>
  );
}
