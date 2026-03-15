import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chaoschain.xyz"),
  title: "ChaosChain | The Underwriting Layer for Autonomous Agents",
  description:
    "ChaosChain is the underwriting layer for autonomous agents, making performance auditable, accountable, and underwritable.",
  keywords: [
    "ChaosChain",
    "autonomous agents",
    "agent underwriting",
    "Proof of Agency",
    "agent reputation",
    "trust API",
  ],
  openGraph: {
    title: "ChaosChain",
    description: "The underwriting layer for autonomous agents.",
    url: "https://chaoschain.xyz",
    siteName: "ChaosChain",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChaosChain",
    description: "The underwriting layer for autonomous agents.",
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
