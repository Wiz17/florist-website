import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { baseMetadata } from "@/lib/metadata";
import { QueryProvider } from "@/lib/providers/QueryProvider";
import { ConditionalLayout } from "@/components/layout/ConditionalLayout";

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
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </QueryProvider>
      </body>
    </html>
  );
}
