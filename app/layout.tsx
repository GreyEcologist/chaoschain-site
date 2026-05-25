import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

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
      <head>
        <script src="https://cdn.amplitude.com/libs/analytics-browser-2.11.1-min.js.gz"></script>
        <script src="https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.x.x-min.js.gz"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.amplitude.add(window.sessionReplay.plugin({ sampleRate: 1 }));
  window.amplitude.init('8baef1d70c5ce068fffbda18281aebab', { autocapture: true });
  var params = new URLSearchParams(window.location.search);
  var id = new window.amplitude.Identify();
  id.set('utm_source',   params.get('utm_source'));
  id.set('utm_medium',   params.get('utm_medium'));
  id.set('utm_campaign', params.get('utm_campaign'));
  id.set('utm_content',  params.get('utm_content'));
  window.amplitude.identify(id);
`,
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
