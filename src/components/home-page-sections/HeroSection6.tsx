'use client'
import { motion } from 'framer-motion';

const cards = [
  {
    id: 1,
    category: 'Bouquets',
    title: 'Hand-Tied Classics',
    price: 'From $45',
    gradient: 'linear-gradient(160deg, #F5E1E1 0%, #D4A5A5 100%)',
    size: 'large',
  },
  {
    id: 2,
    category: 'Weddings',
    title: 'Bridal Dreams',
    price: 'Custom Quote',
    gradient: 'linear-gradient(160deg, #B8C9A9 0%, #7A9568 100%)',
    size: 'medium',
  },
  {
    id: 3,
    category: 'Events',
    title: 'Grand Centerpieces',
    price: 'From $120',
    gradient: 'linear-gradient(160deg, #F5EDE4 0%, #A89076 100%)',
    size: 'medium',
  },
  {
    id: 4,
    category: 'Gifts',
    title: 'Boxed Blooms',
    price: 'From $65',
    gradient: 'linear-gradient(160deg, #E8C4C4 0%, #8B4049 100%)',
    size: 'small',
  },
];

export function HeroSection6() {
  return (
    <section className="relative min-h-[700px] bg-cream overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blush/10 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-sage/10 translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">
        {/* Top section - Title and description */}
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="font-[family-name:var(--font-lato)] tracking-[0.4em] uppercase text-xs text-burgundy mb-4"
            >
              Curated Collections
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-[family-name:var(--font-playfair)] text-6xl font-bold text-charcoal leading-[1.1]"
            >
              Nature&apos;s Finest,
              <br />
              <span className="text-burgundy italic">Artfully</span> Arranged
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-xs text-right"
          >
            <p className="font-[family-name:var(--font-lato)] text-charcoal-light leading-relaxed mb-6">
              Discover our signature collections, each piece a testament to botanical artistry and timeless elegance.
            </p>
            <button className="font-[family-name:var(--font-lato)] text-sm font-semibold text-charcoal tracking-wider uppercase border-b-2 border-burgundy pb-1 hover:text-burgundy transition-colors duration-300">
              View All Collections
            </button>
          </motion.div>
        </div>

        {/* Overlapping Cards */}
        <div className="relative h-[420px]">
          {/* Card 1 - Large, leftmost */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="absolute left-0 top-0 w-[340px] h-[400px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group z-10"
          >
            <div className="absolute inset-0" style={{ background: cards[0].gradient }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" opacity="0.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Card content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/40 to-transparent">
              <span className="font-[family-name:var(--font-lato)] text-xs tracking-[0.3em] uppercase text-white/70">
                {cards[0].category}
              </span>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mt-1">
                {cards[0].title}
              </h3>
              <div className="flex justify-between items-center mt-3">
                <span className="font-[family-name:var(--font-lato)] text-sm text-white/80">{cards[0].price}</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/40 transition-colors duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Medium, overlapping card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="absolute left-[280px] top-[30px] w-[300px] h-[370px] rounded-3xl overflow-hidden shadow-xl cursor-pointer group z-20"
          >
            <div className="absolute inset-0" style={{ background: cards[1].gradient }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" opacity="0.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-7 bg-gradient-to-t from-black/40 to-transparent">
              <span className="font-[family-name:var(--font-lato)] text-xs tracking-[0.3em] uppercase text-white/70">
                {cards[1].category}
              </span>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mt-1">
                {cards[1].title}
              </h3>
              <div className="flex justify-between items-center mt-3">
                <span className="font-[family-name:var(--font-lato)] text-sm text-white/80">{cards[1].price}</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/40 transition-colors duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Medium, further right */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="absolute left-[530px] top-[10px] w-[300px] h-[380px] rounded-3xl overflow-hidden shadow-xl cursor-pointer group z-15"
          >
            <div className="absolute inset-0" style={{ background: cards[2].gradient }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" opacity="0.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-7 bg-gradient-to-t from-black/40 to-transparent">
              <span className="font-[family-name:var(--font-lato)] text-xs tracking-[0.3em] uppercase text-white/70">
                {cards[2].category}
              </span>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mt-1">
                {cards[2].title}
              </h3>
              <div className="flex justify-between items-center mt-3">
                <span className="font-[family-name:var(--font-lato)] text-sm text-white/80">{cards[2].price}</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/40 transition-colors duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Small, rightmost */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="absolute right-0 top-[50px] w-[260px] h-[340px] rounded-3xl overflow-hidden shadow-lg cursor-pointer group z-10"
          >
            <div className="absolute inset-0" style={{ background: cards[3].gradient }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" opacity="0.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/40 to-transparent">
              <span className="font-[family-name:var(--font-lato)] text-xs tracking-[0.3em] uppercase text-white/70">
                {cards[3].category}
              </span>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white mt-1">
                {cards[3].title}
              </h3>
              <div className="flex justify-between items-center mt-3">
                <span className="font-[family-name:var(--font-lato)] text-sm text-white/80">{cards[3].price}</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/40 transition-colors duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Floating decorative petal shapes */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 left-[200px] w-8 h-8 rounded-full bg-blush/40 z-0"
          />
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-[100px] right-[80px] w-6 h-6 rounded-full bg-sage/30 z-0"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-[20px] left-[450px] w-10 h-10 rounded-full bg-mocha-light/20 z-0"
          />
        </div>
      </div>
    </section>
  );
}
