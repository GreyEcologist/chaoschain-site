export function SiteFooter() {
  return (
    <footer className="section-shell section-divider pb-8 md:pb-10">
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-zinc-900/80 bg-zinc-950/75 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        <p className="text-sm font-semibold tracking-[0.3em] text-zinc-100 md:text-base">CHAOSCHAIN</p>

        <p className="text-sm text-zinc-400 md:text-base">ChaosChain 2026. All Rights Reserved</p>

        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="ChaosChain on X"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M18.9 2H22l-6.8 7.76L23.2 22h-6.3l-4.93-6.67L6.2 22H3l7.27-8.3L.8 2h6.36l4.45 6.07L18.9 2Zm-1.1 18h1.74L6.23 3.9H4.35L17.8 20Z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="ChaosChain on LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M6.94 8.5A1.56 1.56 0 1 1 6.95 5.38a1.56 1.56 0 0 1-.01 3.12ZM5.6 9.8h2.7V18H5.6V9.8Zm4.2 0h2.58v1.12h.04c.36-.68 1.24-1.4 2.56-1.4 2.74 0 3.24 1.8 3.24 4.12V18h-2.7v-3.9c0-.93-.02-2.12-1.3-2.12-1.3 0-1.5 1-1.5 2.05V18H9.8V9.8Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
