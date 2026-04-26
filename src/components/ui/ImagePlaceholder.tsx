import Image from "next/image";

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  className?: string;
  gradient?: string;
  sizes?: string;
  priority?: boolean;
}

export function ImagePlaceholder({
  src,
  alt,
  className,
  gradient,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
}: ImagePlaceholderProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover object-top"
          sizes={sizes}
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gray-200"
          style={gradient ? { background: gradient } : undefined}
        >
          <span className="text-white/60 text-sm text-center px-4">{alt}</span>
        </div>
      )}
    </div>
  );
}
