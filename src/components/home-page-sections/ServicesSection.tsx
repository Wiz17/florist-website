"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const services = [
  {
    title: "Custom Bouquets",
    description:
      "Bespoke arrangements tailored to your vision, using the freshest seasonal blooms.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.38a48.474 48.474 0 0 0-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #E8C4C4 0%, #D4A5A5 100%)",
    color: "#722F37",
    bgColor: "#FDF8F3",
  },
  {
    title: "Wedding Florals",
    description:
      "From bridal bouquets to venue decorations, we create magical wedding experiences.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #F5E1E1 0%, #F4C2C2 100%)",
    color: "#722F37",
    bgColor: "#F5E1E1",
  },
  {
    title: "Gift Delivery",
    description:
      "Same-day delivery available. Surprise your loved ones with stunning arrangements.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #B8C9A9 0%, #9CAF88 100%)",
    color: "#7A9568",
    bgColor: "#E8F0E3",
  },
  {
    title: "Event Styling",
    description:
      "Transform any space with our creative floral installations and designs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #B8A9C9 0%, #9683A9 100%)",
    color: "#6B5B7A",
    bgColor: "#F0EBF5",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-cream-dark" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="font-[family-name:var(--font-lato)] text-sage-dark tracking-[0.3em] uppercase text-sm mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-charcoal"
          >
            Our Services
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative bg-white rounded-3xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Gradient top accent */}
              <div
                className="h-2 w-full"
                style={{ background: service.gradient }}
              />

              {/* Card content */}
              <div className="p-8">
                {/* Icon container */}
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                  style={{
                    backgroundColor: service.bgColor,
                    color: service.color
                  }}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3
                  className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-burgundy"
                  style={{ color: "#2D2D2D" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-[family-name:var(--font-lato)] text-charcoal-light text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn more link */}
                <motion.div
                  className="flex items-center gap-2 font-[family-name:var(--font-lato)] text-sm font-semibold transition-all duration-300"
                  style={{ color: service.color }}
                  whileHover={{ x: 5 }}
                >
                  <span>Learn More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
