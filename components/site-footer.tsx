import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="section-shell section-divider pb-8 md:pb-10">
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-zinc-900/80 bg-zinc-950/75 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        <Image src="/Logo light.png" alt="ChaosChain" width={360} height={40} className="h-5 w-auto md:h-6" />

        <p className="text-sm text-zinc-400 md:text-base">ChaosChain 2026. All Rights Reserved</p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/ChaosChain/chaoschain"
            aria-label="ChaosChain on GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.1.82-.26.82-.57v-2c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.34-1.74-1.34-1.74-1.1-.75.08-.73.08-.73 1.21.09 1.85 1.23 1.85 1.23 1.08 1.84 2.82 1.31 3.5 1 .1-.77.42-1.31.77-1.61-2.67-.3-5.47-1.32-5.47-5.9 0-1.3.47-2.37 1.23-3.2-.12-.3-.53-1.53.12-3.18 0 0 1-.32 3.3 1.22a11.6 11.6 0 0 1 6 0c2.3-1.54 3.3-1.22 3.3-1.22.65 1.65.24 2.88.12 3.18.76.83 1.23 1.9 1.23 3.2 0 4.6-2.8 5.6-5.48 5.9.43.37.82 1.1.82 2.22v3.29c0 .31.22.67.83.56A12 12 0 0 0 12 .5Z" />
            </svg>
          </a>
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
