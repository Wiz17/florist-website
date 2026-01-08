"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const testimonials = [
  {
    text: "The wedding flowers were absolutely breathtaking. Every guest commented on how beautiful they were. Thank you for making our day so special!",
    author: "Sarah M.",
    role: "Bride",
    avatar: "https://pbs.twimg.com/profile_images/685700874434314240/80T5j3HF_400x400.jpg",
    gradient: "linear-gradient(135deg, #E8C4C4 0%, #D4A5A5 100%)",
  },
  {
    text: "I order flowers from Bloom & Petal every month for my office. The quality and creativity never disappoint. Highly recommended!",
    author: "James T.",
    role: "Business Owner",
    avatar: "https://pbs.twimg.com/profile_images/685700874434314240/80T5j3HF_400x400.jpg",
    gradient: "linear-gradient(135deg, #B8C9A9 0%, #9CAF88 100%)",
  },
  {
    text: "The funeral arrangements were elegant and meaningful. They helped us honor our grandmother beautifully during a difficult time.",
    author: "Emily R.",
    role: "Customer",
    avatar: "https://pbs.twimg.com/profile_images/685700874434314240/80T5j3HF_400x400.jpg",
    gradient: "linear-gradient(135deg, #B8A9C9 0%, #9683A9 100%)",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-cream">
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
            Kind Words
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-charcoal"
          >
            What Our Customers Say
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={fadeInUp}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              className="bg-white p-8 rounded-2xl relative"
            >
              <div className="text-6xl text-blush absolute -top-4 left-6 font-serif">
                &ldquo;
              </div>
              <p className="font-[family-name:var(--font-lato)] text-charcoal-light text-lg mb-6 pt-6 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <ImagePlaceholder
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-full h-full"
                    gradient={testimonial.gradient}
                  />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-playfair)] font-bold text-charcoal">
                    {testimonial.author}
                  </p>
                  <p className="font-[family-name:var(--font-lato)] text-sm text-charcoal-light">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
