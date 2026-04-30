import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { StickyMobileCTA } from "./components/StickyMobileCTA";
import { LocalBusinessJsonLd } from "./components/JsonLd";
import { business } from "@/lib/business";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "El Nopalito Taqueria — Tacos in Oak Cliff, Dallas",
    template: "%s · El Nopalito Taqueria",
  },
  description:
    "Family-run taqueria in Kiestwood Village, Oak Cliff. Street tacos, quesatacos, birria, and quesadillas. Taco Tuesday $1.99. 2436 W Kiest Blvd, Dallas TX 75233.",
  keywords: [
    "tacos Dallas",
    "tacos Oak Cliff",
    "taqueria Dallas",
    "tacos near me",
    "best tacos in Dallas",
    "birria tacos Dallas",
    "Mexican food 75233",
    "Kiestwood Village restaurant",
    "Taco Tuesday Dallas",
  ],
  openGraph: {
    title: "El Nopalito Taqueria — Tacos in Oak Cliff, Dallas",
    description:
      "Street tacos, quesatacos, birria, and quesadillas in Kiestwood Village. Taco Tuesday $1.99.",
    url: business.siteUrl,
    siteName: business.name,
    images: ["/images/taco-plate.jpg"],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
