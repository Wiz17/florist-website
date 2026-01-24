'use client';

import { usePathname } from 'next/navigation';
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { FestivalBanner } from "@/components/cms/FestivalBanner";
import { AnnouncementBar } from "@/components/cms/AnnouncementBar";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudioRoute = pathname?.startsWith('/studio');

  if (isStudioRoute) {
    return <>{children}</>;
  }

  return (
    <div className="relative w-full max-w-[1920px] mx-auto overflow-x-clip">
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Navigation />
      </div>
      <FestivalBanner />
      <main className="w-full pt-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}
