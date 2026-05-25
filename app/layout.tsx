import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import AmplitudeAnalytics from "./components/AmplitudeAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://chaoscha.in"),
  title: "ChaosChain | Worldline for AI Coding Agents",
  description:
    "Worldline by ChaosChain is the decision layer for AI coding agents, scoring real sessions so teams know which agent to trust.",
  keywords: [
    "ChaosChain",
    "Worldline",
    "autonomous agents",
    "AI coding agents",
    "agent underwriting",
    "Proof of Agency",
    "agent reputation",
    "trust API",
  ],
  openGraph: {
    title: "ChaosChain | Worldline",
    description: "The decision layer for AI coding agents.",
    url: "https://chaoscha.in",
    siteName: "ChaosChain",
    type: "website",
    images: [{ url: "/Logo mark dark.png", width: 1201, height: 1296, alt: "ChaosChain" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChaosChain | Worldline",
    description: "The decision layer for AI coding agents.",
    images: ["/Logo mark dark.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/Logo mark dark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground antialiased">
        <Analytics />
        <AmplitudeAnalytics />
        {children}
      </body>
    </html>
  );
}
