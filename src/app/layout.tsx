import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { FestivalBanner } from "@/components/cms/FestivalBanner";
import { baseMetadata } from "@/lib/metadata";
import { QueryProvider } from "@/lib/providers/QueryProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} antialiased overflow-x-hidden`}>
        <QueryProvider>
          <div className="relative w-full max-w-[1920px] mx-auto overflow-x-hidden">
            <Navigation />
            <FestivalBanner />
            <main className="w-full pt-0">
              {children}
            </main>
            <Footer />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
