import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { baseMetadata } from "@/lib/metadata";
import { QueryProvider } from "@/lib/providers/QueryProvider";
import { ConditionalLayout } from "@/components/layout/ConditionalLayout";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
      <body className={`${urbanist.variable} font-[family-name:var(--font-urbanist)] antialiased overflow-x-hidden`}>
        <QueryProvider>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </QueryProvider>
      </body>
    </html>
  );
}
