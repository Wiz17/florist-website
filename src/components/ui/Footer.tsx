"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const socials = [
  { name: "Instagram", href: "https://instagram.com" },
  { name: "Facebook", href: "https://facebook.com" },
  { name: "Pinterest", href: "https://pinterest.com" },
];

const quickLinks = [
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

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
            <h3 className="text-2xl font-bold text-white mb-4">
              Bloom &amp; Petal
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Artisan florist creating beautiful, sustainable floral
              arrangements for all of life&apos;s moments.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ y: -3, color: "#E8C4C4" }}
                  className="text-gray-400 hover:text-blush transition-colors"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blush transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <address className="not-italic space-y-3 text-gray-400">
              <p>123 Flower Street</p>
              <p>Garden City, GC 12345</p>
              <p>
                <a
                  href="mailto:hello@bloomandpetal.com"
                  className="hover:text-blush transition-colors"
                >
                  hello@bloomandpetal.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+15551234567"
                  className="hover:text-blush transition-colors"
                >
                  (555) 123-4567
                </a>
              </p>
            </address>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 text-center"
        >
          <p className="text-gray-500">
            &copy; {year} Bloom &amp; Petal. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
