"use client";

interface FloatingPetalsLoaderProps {
  message?: string;
  fullScreen?: boolean;
}

export function FloatingPetalsLoader({ 
  message = "Loading...",
  fullScreen = false 
}: FloatingPetalsLoaderProps) {
  return (
    <div className={`${fullScreen ? 'min-h-screen' : 'py-16'} bg-cream flex items-center justify-center`}>
      <div className="text-center">
        {/* Animated flower loader */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          {/* Rotating petals */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: "3s" }}>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-5 h-5 bg-blush rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${i * 60}deg) translateY(-16px) translateX(-50%)`,
                  opacity: 0.7 + (i * 0.05),
                }}
              />
            ))}
          </div>

          {/* Inner petals - counter rotate */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: "2s", animationDirection: "reverse" }}>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-sage rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${i * 60 + 30}deg) translateY(-10px) translateX(-50%)`,
                  opacity: 0.6,
                }}
              />
            ))}
          </div>

          {/* Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-burgundy rounded-full animate-pulse" />
        </div>

        <p className="font-[family-name:var(--font-playfair)] text-charcoal text-xl italic">
          {message}
        </p>
        <p className="font-[family-name:var(--font-lato)] text-charcoal-light text-sm mt-2">
          Bloom & Petal
        </p>
      </div>
    </div>
  );
}
