"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { FloatingPetals } from "@/components/ui/FloatingPetals";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";

const team = [
  {
    name: "Sarah Mitchell",
    role: "Founder & Lead Designer",
    image: "/about/team-sarah.png",
    gradient: "linear-gradient(135deg, #E8C4C4 0%, #D4A5A5 100%)",
  },
  {
    name: "James Chen",
    role: "Senior Florist",
    image: "/about/team-james.png",
    gradient: "linear-gradient(135deg, #B8C9A9 0%, #9CAF88 100%)",
  },
  {
    name: "Emily Rose",
    role: "Wedding Specialist",
    image: "/about/team-emily.png",
    gradient: "linear-gradient(135deg, #B8A9C9 0%, #9683A9 100%)",
  },
];

const values = [
  {
    title: "Sustainability",
    description: "We source our flowers from local, eco-friendly farms and use sustainable packaging.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Quality",
    description: "Only the freshest, most beautiful blooms make it into our arrangements.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
  {
    title: "Creativity",
    description: "Each arrangement is a unique work of art, designed to tell your story.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-cream">
      <FloatingPetals />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 bg-cream relative overflow-hidden">
        
        <motion.div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-sage-light opacity-30 blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
            >
              <p className="font-[family-name:var(--font-lato)] text-sage-dark tracking-[0.3em] uppercase text-sm mb-4">
                Our Story
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-charcoal mb-6">
                Bringing Nature&apos;s Beauty
                <br />
                <span className="text-burgundy italic">Into Your Life</span>
              </h1>
              <p className="font-[family-name:var(--font-lato)] text-lg text-charcoal-light mb-6 leading-relaxed">
                Founded in 2010 by Sarah Mitchell, Bloom & Petal started as a small
                passion project in a tiny studio apartment. What began as a love for
                flowers and design has blossomed into Garden City&apos;s most beloved
                florist.
              </p>
              <p className="font-[family-name:var(--font-lato)] text-lg text-charcoal-light leading-relaxed">
                Today, our team of talented florists creates stunning arrangements
                for weddings, events, and everyday moments. We believe that flowers
                have the power to transform spaces and touch hearts.
              </p>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <motion.div
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
              >
                <ImagePlaceholder
                  src="/about/about-hero.png"
                  alt="Our flower studio"
                  className="h-[500px] w-full"
                  gradient="linear-gradient(135deg, #E8C4C4 0%, #B8C9A9 100%)"
                />
              </motion.div>
              <div className="absolute -bottom-6 right-12 w-48 h-48 bg-sage rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-burgundy rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-cream-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="font-[family-name:var(--font-lato)] text-sage-dark tracking-[0.3em] uppercase text-sm mb-4"
            >
              What We Stand For
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-charcoal"
            >
              Our Values
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl text-center shadow-lg"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blush-light flex items-center justify-center text-burgundy">
                  {value.icon}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-charcoal mb-4">
                  {value.title}
                </h3>
                <p className="font-[family-name:var(--font-lato)] text-charcoal-light">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="font-[family-name:var(--font-lato)] text-sage-dark tracking-[0.3em] uppercase text-sm mb-4"
            >
              Meet The Team
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-charcoal"
            >
              The Faces Behind the Blooms
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="h-80 w-full relative"
                  >
                    <ImagePlaceholder
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full"
                      gradient={member.gradient}
                    />
                  </motion.div>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal group-hover:text-burgundy transition-colors text-center">
                  {member.name}
                </h3>
                <p className="font-[family-name:var(--font-lato)] text-charcoal-light text-center">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
