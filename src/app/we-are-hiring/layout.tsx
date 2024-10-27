import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/Footer";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Deviators Club | Explore Innovative Ideas and Collaborate",
  description:
    "Join Deviators Club to explore groundbreaking ideas, collaborate with innovative minds, and transform concepts into reality. Connect with fellow creators and entrepreneurs.",
  keywords:
    "innovation, collaboration, creative ideas, entrepreneurship, startup community, idea exploration, DCE tech community",
  authors: [{ name: "Deviators Club DCE" }],
  creator: "Deviators Club DCE",
  publisher: "Deviators Club DCE",
  metadataBase: new URL("https://deviatorsdce.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Deviators Club | Explore Innovative Ideas and Collaborate",
    description:
      "Join Deviators Club to explore groundbreaking ideas, collaborate with innovative minds, and transform concepts into reality.",
    url: "https://deviatorsdce.tech",
    siteName: "Deviators Club DCE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Deviators Club DCE - Where Innovation Meets Collaboration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deviators Club | Explore Innovative Ideas and Collaborate",
    description:
      "Join Deviators Club to explore groundbreaking ideas, collaborate with innovative minds, and transform concepts into reality.",
    images: ["/og-image.jpg"],
    creator: "@deviatorsdce",
    site: "@deviatorsdce",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        {children}
        <Footer />

        {/* Vercel analytics & Speed Counter */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}