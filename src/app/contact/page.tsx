"use client";

import { motion } from "framer-motion";
import { FloatingPetals } from "@/components/ui/FloatingPetals";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";

const contactInfo = [
  {
    title: "Visit Us",
    details: ["123 Flower Street", "Garden City, GC 12345"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    title: "Call Us",
    details: ["(555) 123-4567", "Mon-Sat: 9am - 6pm"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
  {
    title: "Email Us",
    details: ["hello@bloomandpetal.com", "orders@bloomandpetal.com"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-cream">
      <FloatingPetals />

      {/* Hero Section */}
      <section className="pt-6 md:pt-10 pb-16 px-6 bg-cream relative overflow-hidden">
        
        <motion.div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-sage-light opacity-30 blur-3xl" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="font-[family-name:var(--font-lato)] text-sage-dark tracking-[0.3em] uppercase text-sm mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-charcoal mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="font-[family-name:var(--font-lato)] text-lg text-charcoal-light max-w-2xl mx-auto"
          >
            Have a question or want to place a custom order? We&apos;d love to hear from you.
            Reach out and let&apos;s create something beautiful together.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {contactInfo.map((info) => (
              <motion.div
                key={info.title}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blush-light flex items-center justify-center text-burgundy">
                  {info.icon}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, index) => (
                  <p
                    key={index}
                    className="font-[family-name:var(--font-lato)] text-charcoal-light"
                  >
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
            >
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-charcoal mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-[family-name:var(--font-lato)] text-charcoal mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-burgundy focus:outline-none transition-colors font-[family-name:var(--font-lato)]"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block font-[family-name:var(--font-lato)] text-charcoal mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-burgundy focus:outline-none transition-colors font-[family-name:var(--font-lato)]"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-[family-name:var(--font-lato)] text-charcoal mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-burgundy focus:outline-none transition-colors font-[family-name:var(--font-lato)]"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block font-[family-name:var(--font-lato)] text-charcoal mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-burgundy focus:outline-none transition-colors font-[family-name:var(--font-lato)] bg-white">
                    <option>General Inquiry</option>
                    <option>Custom Order</option>
                    <option>Wedding Consultation</option>
                    <option>Event Flowers</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-[family-name:var(--font-lato)] text-charcoal mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-burgundy focus:outline-none transition-colors font-[family-name:var(--font-lato)] resize-none"
                    placeholder="Tell us about your floral needs..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-burgundy text-white py-4 rounded-full font-[family-name:var(--font-lato)] text-lg hover:bg-burgundy/90 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Map / Store Hours */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8 h-full flex flex-col"
            >
              {/* Map placeholder */}
              <div className="flex-1 min-h-[300px] bg-sage-light rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/80 flex items-center justify-center text-burgundy">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal">
                      Find Us Here
                    </p>
                    <p className="font-[family-name:var(--font-lato)] text-charcoal-light">
                      123 Flower Street, Garden City
                    </p>
                  </div>
                </div>
              </div>

              {/* Store Hours */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-charcoal mb-6">
                  Store Hours
                </h3>
                <div className="space-y-4">
                  {[
                    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "10:00 AM - 5:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((schedule) => (
                    <div
                      key={schedule.day}
                      className="flex justify-between items-center pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                    >
                      <span className="font-[family-name:var(--font-lato)] text-charcoal">
                        {schedule.day}
                      </span>
                      <span className="font-[family-name:var(--font-lato)] text-burgundy font-semibold">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
