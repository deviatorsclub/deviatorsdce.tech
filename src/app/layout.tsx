import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { metaDataBase } from "@/data/metaData";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  ...metaDataBase,
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
      <body className="dark">
        <Navbar />
        {children}
        <Footer />

        {/* Vercel analytics & Speed Counter */}
        {process.env.NODE_ENV === "production" && <Analytics />}
        {process.env.NODE_ENV === "production" && <SpeedInsights />}
      </body>
    </html>
  );
}
