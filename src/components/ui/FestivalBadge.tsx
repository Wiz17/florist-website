'use client';

import { type Festival } from '@/lib/sanity';

interface FestivalBadgeProps {
  festival: Festival;
}

export function FestivalBadge({ festival }: FestivalBadgeProps) {
  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-burgundy/10 border border-burgundy/20">
      <span className="w-2 h-2 rounded-full bg-burgundy animate-pulse" />
      <span className="font-[family-name:var(--font-lato)] text-xs font-semibold text-burgundy">
        Festival Special
      </span>
    </div>
  );
}
