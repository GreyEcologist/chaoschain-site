import type { Metadata } from "next";
import "./globals.css";

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
  },
  twitter: {
    card: "summary_large_image",
    title: "ChaosChain | Worldline",
    description: "The decision layer for AI coding agents.",
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
        {children}
      </body>
    </html>
  );
}
