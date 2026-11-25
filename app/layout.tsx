import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blac — Full-stack developer & designer",
  description: "A portfolio for Blac, a full-stack developer and designer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} bg-background text-foreground antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
