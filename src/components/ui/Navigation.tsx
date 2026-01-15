"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-burgundy cursor-pointer"
            >
              Bloom & Petal
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.span
                  whileHover={{ y: -2 }}
                  className={`font-[family-name:var(--font-lato)] transition-colors relative group cursor-pointer ${
                    scrolled
                      ? "text-charcoal hover:text-burgundy"
                      : "text-charcoal hover:text-burgundy"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-burgundy transition-all duration-300 group-hover:w-full" />
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Desktop Order Button */}
          <Link href="/shop" className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-2.5 rounded-full font-[family-name:var(--font-lato)] font-semibold border-2 border-[#2D2D2D] bg-transparent overflow-hidden group"
            >
              <span className="relative z-10 text-[#2D2D2D] group-hover:text-white transition-colors duration-300">
                Order Now
              </span>
              <span className="absolute inset-0 bg-[#2D2D2D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </motion.button>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center z-50"
            aria-label="Toggle mobile menu"
          >
            <motion.span
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 0 : -6,
              }}
              transition={{ duration: 0.3 }}
              className="absolute w-6 h-0.5 bg-charcoal rounded-full"
            />
            <motion.span
              animate={{
                opacity: mobileMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="absolute w-6 h-0.5 bg-charcoal rounded-full"
            />
            <motion.span
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? 0 : 6,
              }}
              transition={{ duration: 0.3 }}
              className="absolute w-6 h-0.5 bg-charcoal rounded-full"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full bg-white shadow-2xl z-40 md:hidden"
            >
              <div className="flex flex-col h-full pt-24 px-6 pb-8">
                {/* Navigation Links */}
                <div className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link href={item.href} onClick={closeMobileMenu}>
                        <span className="block py-3 px-4 font-[family-name:var(--font-lato)] text-lg text-charcoal hover:text-burgundy hover:bg-sage/10 rounded-lg transition-all duration-200">
                          {item.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-gray-200" />

                {/* Order Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link href="/shop" onClick={closeMobileMenu}>
                    <button className="w-full py-3 px-6 rounded-full font-[family-name:var(--font-lato)] font-semibold bg-[#2D2D2D] text-white hover:bg-burgundy transition-colors duration-300">
                      Order Now
                    </button>
                  </Link>
                </motion.div>

                {/* Footer decoration */}
                <div className="mt-auto">
                  <p className="font-[family-name:var(--font-playfair)] text-sm text-gray-400 text-center">
                    Bloom & Petal
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
