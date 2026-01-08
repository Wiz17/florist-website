"use client";

import { motion } from "framer-motion";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
        <Link href="/shop">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-6 py-2.5 rounded-full font-[family-name:var(--font-lato)] font-semibold border-2 border-[#2D2D2D] bg-transparent overflow-hidden group"
          >
            <span className="relative z-10 text-[#2D2D2D] group-hover:text-white transition-colors duration-300">Order Now</span>
            <span className="absolute inset-0 bg-[#2D2D2D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
}
