import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-cream px-6">
      <div className="max-w-md text-center">
        <p className="text-sm tracking-[0.4em] uppercase text-sage-dark mb-4">
          404
        </p>
        <h2 className="text-4xl font-bold text-charcoal mb-4">
          Page not found
        </h2>
        <p className="text-charcoal-light mb-8">
          The flower you&apos;re looking for has wilted away. Let&apos;s get you
          back to the garden.
        </p>
        <Link
          href="/"
          className="inline-flex px-8 py-3 rounded-full bg-burgundy text-cream text-sm font-medium hover:bg-burgundy-light transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
