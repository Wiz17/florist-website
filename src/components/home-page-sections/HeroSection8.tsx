'use client'
import { motion } from 'framer-motion';

const mosaicItems = [
  {
    id: 1,
    label: 'Roses',
    gradient: 'linear-gradient(145deg, #F5E1E1 0%, #D4A5A5 100%)',
  },
  {
    id: 2,
    label: 'Wildflowers',
    gradient: 'linear-gradient(145deg, #B8C9A9 0%, #7A9568 100%)',
  },
  {
    id: 3,
    label: 'Orchids',
    gradient: 'linear-gradient(145deg, #F5EDE4 0%, #8B7355 100%)',
  },
  {
    id: 4,
    label: 'Lilies',
    gradient: 'linear-gradient(145deg, #E8C4C4 0%, #722F37 100%)',
  },
  {
    id: 5,
    label: 'Peonies',
    gradient: 'linear-gradient(145deg, #A89076 0%, #8B7355 100%)',
  },
  {
    id: 6,
    label: 'Tulips',
    gradient: 'linear-gradient(145deg, #9CAF88 0%, #B8C9A9 100%)',
  },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function HeroSection8() {
  return (
    <section className="relative min-h-[700px] bg-cream overflow-hidden">
      {/* Subtle background pattern - diagonal lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #2D2D2D 0, #2D2D2D 1px, transparent 0, transparent 50%)',
        backgroundSize: '30px 30px',
      }} />

      <div className="max-w-7xl mx-auto px-8 py-16 relative z-10">
        <div className="flex gap-12 items-start">
          {/* Left: Mosaic Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="w-[55%] grid grid-cols-3 grid-rows-3 gap-4 h-[600px]"
          >
            {/* Tile 1 - Large, spans 2 cols and 2 rows */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 0.98 }}
              className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative cursor-pointer group"
            >
              <div
                className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
                style={{ background: mosaicItems[0].gradient }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full border-2 border-white/30 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" opacity="0.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                  <span className="text-white/40 font-[family-name:var(--font-lato)] text-xs">{mosaicItems[0].label}</span>
                </div>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end">
                <div className="p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="font-[family-name:var(--font-lato)] text-xs tracking-[0.3em] uppercase text-white/70">Collection</span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white">{mosaicItems[0].label}</h3>
                </div>
              </div>
            </motion.div>

            {/* Tile 2 - Small, top right */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 0.98 }}
              className="rounded-3xl overflow-hidden relative cursor-pointer group"
            >
              <div
                className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
                style={{ background: mosaicItems[1].gradient }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full border-2 border-white/30 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" opacity="0.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                  <span className="text-white/40 font-[family-name:var(--font-lato)] text-[10px]">{mosaicItems[1].label}</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end">
                <div className="p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-[family-name:var(--font-playfair)] text-sm font-bold text-white">{mosaicItems[1].label}</h3>
                </div>
              </div>
            </motion.div>

            {/* Tile 3 - Small, mid right */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 0.98 }}
              className="rounded-3xl overflow-hidden relative cursor-pointer group"
            >
              <div
                className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
                style={{ background: mosaicItems[2].gradient }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full border-2 border-white/30 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" opacity="0.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                  <span className="text-white/40 font-[family-name:var(--font-lato)] text-[10px]">{mosaicItems[2].label}</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end">
                <div className="p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-[family-name:var(--font-playfair)] text-sm font-bold text-white">{mosaicItems[2].label}</h3>
                </div>
              </div>
            </motion.div>

            {/* Tile 4 - Bottom left */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 0.98 }}
              className="rounded-3xl overflow-hidden relative cursor-pointer group"
            >
              <div
                className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
                style={{ background: mosaicItems[3].gradient }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full border-2 border-white/30 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" opacity="0.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                  <span className="text-white/40 font-[family-name:var(--font-lato)] text-[10px]">{mosaicItems[3].label}</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end">
                <div className="p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-[family-name:var(--font-playfair)] text-sm font-bold text-white">{mosaicItems[3].label}</h3>
                </div>
              </div>
            </motion.div>

            {/* Tile 5 - Bottom center, spans 2 cols */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 0.98 }}
              className="col-span-2 rounded-3xl overflow-hidden relative cursor-pointer group"
            >
              <div
                className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
                style={{ background: mosaicItems[4].gradient }}
              >
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-2 rounded-full border-2 border-white/30 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" opacity="0.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                  <span className="text-white/40 font-[family-name:var(--font-lato)] text-xs">{mosaicItems[4].label}</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end">
                <div className="p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white">{mosaicItems[4].label}</h3>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text content */}
          <div className="w-[45%] pt-12 pl-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <p className="font-[family-name:var(--font-lato)] tracking-[0.4em] uppercase text-xs text-sage-dark mb-6">
                Explore Our World
              </p>

              <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-charcoal leading-[1.15] mb-6">
                A Mosaic of
                <br />
                <span className="text-burgundy italic">Botanical</span>
                <br />
                Wonders
              </h1>

              <p className="font-[family-name:var(--font-lato)] text-lg text-charcoal-light leading-relaxed mb-8 max-w-sm">
                Each arrangement is a unique masterpiece. Browse our curated collections and find the perfect bloom for every occasion.
              </p>

              {/* Stats row */}
              <div className="flex gap-10 mb-10">
                <div>
                  <span className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-burgundy">50+</span>
                  <p className="font-[family-name:var(--font-lato)] text-xs text-charcoal-light mt-1 tracking-wider uppercase">Varieties</p>
                </div>
                <div>
                  <span className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-burgundy">2k+</span>
                  <p className="font-[family-name:var(--font-lato)] text-xs text-charcoal-light mt-1 tracking-wider uppercase">Happy Clients</p>
                </div>
                <div>
                  <span className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-burgundy">15+</span>
                  <p className="font-[family-name:var(--font-lato)] text-xs text-charcoal-light mt-1 tracking-wider uppercase">Years</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-charcoal text-cream rounded-full font-[family-name:var(--font-lato)] text-sm font-semibold tracking-wider uppercase hover:bg-burgundy transition-colors duration-300"
                >
                  Shop Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-charcoal/20 rounded-full font-[family-name:var(--font-lato)] text-sm font-semibold tracking-wider uppercase text-charcoal hover:border-burgundy hover:text-burgundy transition-colors duration-300"
                >
                  Our Story
                </motion.button>
              </div>
            </motion.div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16 flex items-center gap-4"
            >
              <div className="w-16 h-[1px] bg-sage" />
              <p className="font-[family-name:var(--font-lato)] text-xs text-charcoal-light italic">
                &quot;Every flower is a soul blossoming in nature&quot;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
