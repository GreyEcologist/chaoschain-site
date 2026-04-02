import { HeaderNav } from "@/components/header-nav";

type SiteHeaderProps = {
  className?: string;
  theme?: "light" | "dark";
};

export function SiteHeader({ className, theme = "light" }: SiteHeaderProps) {
  return (
    <div
      className={[
        "relative z-50",
        className ?? "",
      ].join(" ")}
    >
      <div className="section-shell relative z-50 pt-6 md:pt-8">
        <HeaderNav theme={theme} />
      </div>
    </div>
  );
}
