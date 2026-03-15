type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-3xl leading-tight font-semibold text-zinc-100 md:text-5xl">
        {title}
      </h2>
      {description ? <p className="text-lg leading-relaxed text-zinc-400">{description}</p> : null}
    </div>
  );
}
