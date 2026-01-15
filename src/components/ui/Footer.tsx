"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          <motion.div variants={fadeInUp} className="col-span-1 md:col-span-2">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-4">
              Bloom & Petal
            </h3>
            <p className="font-[family-name:var(--font-lato)] text-gray-400 mb-6 max-w-md">
              Artisan florist creating beautiful, sustainable floral
              arrangements for all of life&apos;s moments.
            </p>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "Pinterest"].map((social) => (
                <motion.a
                  key={social}
                  whileHover={{ y: -3, color: "#E8C4C4" }}
                  className="text-gray-400 hover:text-blush transition-colors font-[family-name:var(--font-lato)]"
                  href="#"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Shop", "Services", "About", "Contact", "FAQ"].map((link) => (
                <li key={link}>
                  <motion.a
                    whileHover={{ x: 5, color: "#E8C4C4" }}
                    className="text-gray-400 hover:text-blush transition-colors font-[family-name:var(--font-lato)]"
                    href="#"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3 font-[family-name:var(--font-lato)] text-gray-400">
              <li>123 Flower Street</li>
              <li>Garden City, GC 12345</li>
              <li>hello@bloomandpetal.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 text-center"
        >
          <p className="font-[family-name:var(--font-lato)] text-gray-500">
            © 2025 Bloom & Petal. All rights reserved. Made with love and fresh
            flowers.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
