"use client";

import Image from "next/image";

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  gradient: string;
}

export function ImagePlaceholder({
  src,
  alt,
  className,
  gradient,
}: ImagePlaceholderProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: gradient }}
        >
          <span className="text-white/60 font-[family-name:var(--font-lato)] text-sm text-center px-4">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
}
