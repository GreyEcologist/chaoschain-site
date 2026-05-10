"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ContactModal } from "@/components/contact-section";

type NavItem = {
  label: string;
  href: string;
  tabKey: string;
  external?: boolean;
};

type HeaderNavProps = {
  theme?: "light" | "dark";
};

const desktopLinks: NavItem[] = [
  { label: "Blog", href: "/blog", tabKey: "Blog" },
  { label: "Docs", href: "https://studio.chaoscha.in/docs", external: true, tabKey: "Docs" },
  { label: "Pricing", href: "/pricing", tabKey: "Pricing" },
  { label: "Contact", href: "#contact", tabKey: "Contact" },
  { label: "GitHub", href: "https://github.com/ChaosChain/chaoschain", external: true, tabKey: "GitHub" },
];

function ExternalArrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5 stroke-current" fill="none" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 11 11 5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 5h5v5" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <div className="relative h-4 w-4">
      <span
        className={`absolute left-0 top-[3px] h-px w-4 bg-zinc-100 transition-all duration-300 ${
          open ? "translate-y-[3.5px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[7px] h-px w-4 bg-zinc-100 transition-all duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 top-[11px] h-px w-4 bg-zinc-100 transition-all duration-300 ${
          open ? "-translate-y-[3.5px] -rotate-45" : ""
        }`}
      />
    </div>
  );
}

export function HeaderNav({ theme = "light" }: HeaderNavProps) {
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash);

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  const activeTab =
    pathname.startsWith("/blog")
      ? "Blog"
      : pathname === "/pricing"
      ? "Pricing"
      : activeHash === "#contact"
        ? "Contact"
        : "";

  const itemClass = (tabKey: string) =>
    [
      "inline-flex translate-y-px items-center justify-center rounded-md px-2 py-1 text-base font-medium tracking-[0.02em] transition-colors duration-200 ease-out",
      theme === "dark" ? "text-white/70 hover:text-white" : "text-zinc-800 hover:text-black",
      activeTab === tabKey ? (theme === "dark" ? "text-white" : "text-zinc-900") : "",
    ].join(" ");

  const closeMenus = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      <div ref={rootRef} className="relative z-30 flex items-center gap-5 md:gap-6">
        <Link href="/" aria-label="ChaosChain home" className="logo-signal-wrap shrink-0">
          <span className="logo-signal-row logo-signal-row-1" aria-hidden="true" />
          <span className="logo-signal-row logo-signal-row-2" aria-hidden="true" />
          <span className="logo-signal-row logo-signal-row-3" aria-hidden="true" />
          <span className="logo-signal-row logo-signal-row-4" aria-hidden="true" />
          <Image
            src={theme === "dark" ? "/Logo light.png" : "/Logo dark.png"}
            alt="ChaosChain"
            width={360}
            height={40}
            className="relative z-10 h-5 w-auto md:h-6"
            priority
          />
        </Link>

        <div className="hidden md:block">
          <div className="relative flex items-center">
            <div className="flex items-center gap-6">
              <Link
                href="https://studio.chaoscha.in"
                className={`${itemClass("Product")} gap-1.5`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Product</span>
                <span className={theme === "dark" ? "opacity-80" : "opacity-70"}><ExternalArrow /></span>
              </Link>

              {desktopLinks.map((item) => {
                if (item.label === "Contact") {
                  return (
                    <button
                      key={item.label}
                      type="button"
                      className={itemClass(item.tabKey)}
                      onClick={() => {
                        setContactOpen(true);
                        setActiveHash("#contact");
                      }}
                    >
                      {item.label}
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`${itemClass(item.tabKey)} ${item.label === "GitHub" ? "gap-1.5" : ""}`}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={() => {
                      if (!item.external) {
                        setActiveHash(item.href);
                      }
                    }}
                  >
                    <span>{item.label}</span>
                    {item.external ? <span className={theme === "dark" ? "opacity-80" : "opacity-70"}><ExternalArrow /></span> : null}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={isMobileOpen}
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-800/80 bg-zinc-950/78 text-zinc-100 backdrop-blur-md transition-colors duration-200 hover:bg-zinc-900 md:hidden"
          onClick={() => setIsMobileOpen((current) => !current)}
        >
          <MenuIcon open={isMobileOpen} />
        </button>

        <AnimatePresence>
          {isMobileOpen ? (
            <motion.div
              className="absolute top-full right-0 left-0 z-40 mt-3 md:hidden"
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.98 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="rounded-[1.6rem] border border-zinc-800/90 bg-[linear-gradient(180deg,rgba(17,17,20,0.98),rgba(10,10,12,0.99))] p-2 shadow-[0_28px_70px_rgba(0,0,0,0.42),inset_0_0_0_1px_rgba(255,255,255,0.015)] backdrop-blur-xl">
                <div className="space-y-1">
                  <Link
                    href="https://studio.chaoscha.in"
                    className="flex items-center justify-between rounded-[1rem] border border-transparent px-4 py-3 text-sm font-medium text-zinc-200 transition-colors duration-200 hover:bg-zinc-900/75"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenus}
                  >
                    <span>Product</span>
                    <ExternalArrow />
                  </Link>

                  <Link
                    href="/blog"
                    className="block rounded-[1rem] px-4 py-3 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:bg-zinc-900/75 hover:text-white"
                    onClick={closeMenus}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/pricing"
                    className="block rounded-[1rem] px-4 py-3 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:bg-zinc-900/75 hover:text-white"
                    onClick={closeMenus}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="https://studio.chaoscha.in/docs"
                    className="flex items-center justify-between rounded-[1rem] px-4 py-3 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:bg-zinc-900/75 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenus}
                  >
                    <span>Docs</span>
                    <ExternalArrow />
                  </Link>
                  <button
                    type="button"
                    className="block w-full rounded-[1rem] px-4 py-3 text-left text-sm font-medium text-zinc-300 transition-colors duration-200 hover:bg-zinc-900/75 hover:text-white"
                    onClick={() => {
                      setContactOpen(true);
                      setActiveHash("#contact");
                      closeMenus();
                    }}
                  >
                    Contact
                  </button>
                  <Link
                    href="https://github.com/ChaosChain/chaoschain"
                    className="flex items-center justify-between rounded-[1rem] px-4 py-3 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:bg-zinc-900/75 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenus}
                  >
                    <span>GitHub</span>
                    <ExternalArrow />
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} sourceLabel="Header navigation" />
    </>
  );
}
