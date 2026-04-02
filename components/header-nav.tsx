"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ContactModal } from "@/components/contact-section";

type ProductItem = {
  title: string;
  description: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  tabKey: string;
  external?: boolean;
};

type HeaderNavProps = {
  theme?: "light" | "dark";
};

const productItems: ProductItem[] = [
  {
    title: "Engineering Studio",
    description: "Trust and evaluation layer for AI coding agents.",
    href: "/#studios",
  },
  {
    title: "Insurance Studio",
    description: "Underwriting and accountability for AI agents.",
    href: "/#studios",
  },
  {
    title: "Compliance Studio",
    description: "Continuous compliance telemetry for financial operators.",
    href: "/#studios",
  },
  {
    title: "Market Maker Studio",
    description: "Agentic liquidity infrastructure and execution assurance.",
    href: "/#studios",
  },
];

const desktopLinks: NavItem[] = [
  { label: "Docs", href: "https://docs.chaoscha.in/overview/introduction", external: true, tabKey: "Docs" },
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
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
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
        setIsProductOpen(false);
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  const activeTab =
    pathname === "/pricing"
      ? "Pricing"
      : activeHash === "#contact"
        ? "Contact"
        : pathname === "/"
          ? "Product"
          : "";

  const itemClass = (tabKey: string) =>
    [
      "inline-flex translate-y-px items-center justify-center rounded-md px-2 py-1 text-base font-medium tracking-[0.02em] transition-colors duration-200 ease-out",
      theme === "dark" ? "text-white/70 hover:text-white" : "text-zinc-800 hover:text-black",
      activeTab === tabKey || (tabKey === "Product" && isProductOpen) ? (theme === "dark" ? "text-white" : "text-zinc-900") : "",
    ].join(" ");

  const closeMenus = () => {
    setIsProductOpen(false);
    setIsMobileOpen(false);
    setIsMobileProductOpen(false);
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

        <div className="hidden md:block" onMouseLeave={() => setIsProductOpen(false)}>
          <div className="relative flex items-center">
            <div className="flex items-center gap-6">
              <div className="relative" onMouseEnter={() => setIsProductOpen(true)}>
                <button
                  type="button"
                  className={`${itemClass("Product")} gap-2`}
                  aria-expanded={isProductOpen}
                  aria-haspopup="menu"
                  onClick={() => setIsProductOpen((current) => !current)}
                >
                  <span>Product</span>
                  <motion.svg
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    className="h-3.5 w-3.5 stroke-current"
                    fill="none"
                    animate={{ rotate: isProductOpen ? 180 : 0 }}
                    transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4.5 6 3.5 4 3.5-4" />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {isProductOpen ? (
                    <motion.div
                      className="absolute top-full left-0 z-[100] pt-2.5"
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="relative w-[25rem] rounded-[1.15rem] border border-white/10 bg-[#05070b]/96 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                        <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-white/5" />
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 rounded-t-[inherit] bg-gradient-to-b from-white/[0.03] to-transparent" />
                        <div className="space-y-1">
                          {productItems.map((item, index) => (
                            <motion.div
                              key={item.title}
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.04, duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            >
                              <Link
                                href={item.href}
                                className="block rounded-[0.95rem] border border-transparent px-4 py-3 transition-colors duration-200 hover:bg-white/5"
                                onClick={() => setIsProductOpen(false)}
                              >
                                <p className="text-sm font-medium text-zinc-100">{item.title}</p>
                                <p className="mt-1 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                              </Link>
                            </motion.div>
                          ))}
                        </div>

                        <div className="mt-2 border-t border-zinc-800/90 px-2 pt-2">
                          <Link
                            href="/#studios"
                            className="flex items-center justify-between rounded-[0.95rem] px-3 py-2.5 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                            onClick={() => setIsProductOpen(false)}
                          >
                            <span>View all studios</span>
                            <ExternalArrow />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>

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
                        setIsProductOpen(false);
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
                      setIsProductOpen(false);
                    }}
                  >
                    <span>{item.label}</span>
                    {item.label === "GitHub" ? <span className={theme === "dark" ? "opacity-80" : "opacity-70"}><ExternalArrow /></span> : null}
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
          onClick={() => {
            setIsMobileOpen((current) => {
              if (current) {
                setIsMobileProductOpen(false);
              }

              return !current;
            });
          }}
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
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-[1rem] border border-transparent px-4 py-3 text-left text-sm font-medium text-zinc-200 transition-colors duration-200 hover:bg-zinc-900/75"
                    onClick={() => setIsMobileProductOpen((current) => !current)}
                  >
                    <span>Product</span>
                    <motion.svg
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      className="h-3.5 w-3.5 stroke-current"
                      fill="none"
                      animate={{ rotate: isMobileProductOpen ? 180 : 0 }}
                      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4.5 6 3.5 4 3.5-4" />
                    </motion.svg>
                  </button>

                  <AnimatePresence initial={false}>
                    {isMobileProductOpen ? (
                      <motion.div
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="space-y-1 px-2 pb-2">
                          {productItems.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="block rounded-[1rem] border border-transparent px-4 py-3 transition-colors duration-200 hover:bg-zinc-900/75"
                              onClick={closeMenus}
                            >
                              <p className="text-sm font-medium text-zinc-100">{item.title}</p>
                              <p className="mt-1 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                            </Link>
                          ))}
                          <Link
                            href="/#studios"
                            className="flex items-center justify-between rounded-[1rem] px-4 py-3 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:bg-zinc-900/75 hover:text-white"
                            onClick={closeMenus}
                          >
                            <span>View all studios</span>
                            <ExternalArrow />
                          </Link>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>

                  <Link
                    href="https://docs.chaoscha.in/overview/introduction"
                    className="flex items-center justify-between rounded-[1rem] px-4 py-3 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:bg-zinc-900/75 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenus}
                  >
                    <span>Docs</span>
                    <ExternalArrow />
                  </Link>
                  <Link
                    href="/pricing"
                    className="block rounded-[1rem] px-4 py-3 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:bg-zinc-900/75 hover:text-white"
                    onClick={closeMenus}
                  >
                    Pricing
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
