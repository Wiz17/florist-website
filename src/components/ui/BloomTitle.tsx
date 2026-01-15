"use client";

import { motion } from "framer-motion";

export function BloomTitle() {
  return (
    <div className="relative inline-block">
      {/* First Butterfly - flies around the word */}
      <motion.svg
        className="absolute w-6 h-6 z-20"
        viewBox="0 0 100 100"
        fill="none"
        initial={{ x: -30, y: -35 }}
        animate={{
          x: ["-30px", "85px", "60px", "0px", "-30px"],
          y: ["-35px", "-10px", "10px", "-25px", "-35px"],
          rotate: [0, 15, -10, 10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Butterfly body */}
        <ellipse cx="50" cy="50" rx="3" ry="11" fill="#1a1a1a" />
        <circle cx="50" cy="37" r="4" fill="#1a1a1a" />

        {/* Antennae */}
        <path d="M48 34 Q43 26 40 22" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M52 34 Q57 26 60 22" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="40" cy="22" r="2" fill="#1a1a1a" />
        <circle cx="60" cy="22" r="2" fill="#1a1a1a" />

        {/* Wings with flapping */}
        <motion.path
          d="M47 43 Q24 34 26 52 Q28 63 47 55"
          fill="#d65d6a"
          animate={{ d: [
            "M47 43 Q24 34 26 52 Q28 63 47 55",
            "M47 43 Q34 38 35 52 Q36 59 47 55",
            "M47 43 Q24 34 26 52 Q28 63 47 55"
          ]}}
          transition={{ duration: 0.25, repeat: Infinity }}
        />
        <motion.path
          d="M47 55 Q30 63 32 72 Q38 76 47 62"
          fill="#e8889a"
          animate={{ d: [
            "M47 55 Q30 63 32 72 Q38 76 47 62",
            "M47 55 Q37 66 38 71 Q41 75 47 62",
            "M47 55 Q30 63 32 72 Q38 76 47 62"
          ]}}
          transition={{ duration: 0.25, repeat: Infinity }}
        />
        <motion.path
          d="M53 43 Q76 34 74 52 Q72 63 53 55"
          fill="#d65d6a"
          animate={{ d: [
            "M53 43 Q76 34 74 52 Q72 63 53 55",
            "M53 43 Q66 38 65 52 Q64 59 53 55",
            "M53 43 Q76 34 74 52 Q72 63 53 55"
          ]}}
          transition={{ duration: 0.25, repeat: Infinity }}
        />
        <motion.path
          d="M53 55 Q70 63 68 72 Q62 76 53 62"
          fill="#e8889a"
          animate={{ d: [
            "M53 55 Q70 63 68 72 Q62 76 53 62",
            "M53 55 Q63 66 62 71 Q59 75 53 62",
            "M53 55 Q70 63 68 72 Q62 76 53 62"
          ]}}
          transition={{ duration: 0.25, repeat: Infinity }}
        />

        {/* Wing spots */}
        <circle cx="36" cy="50" r="4" fill="#fff" opacity="0.4" />
        <circle cx="64" cy="50" r="4" fill="#fff" opacity="0.4" />
      </motion.svg>

      {/* Second Butterfly - different path and color */}
      <motion.svg
        className="absolute w-5 h-5 z-20"
        viewBox="0 0 100 100"
        fill="none"
        initial={{ x: 70, y: -20 }}
        animate={{
          x: ["70px", "-20px", "30px", "90px", "70px"],
          y: ["-20px", "5px", "-30px", "0px", "-20px"],
          rotate: [0, -20, 15, -5, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        {/* Butterfly body */}
        <ellipse cx="50" cy="50" rx="3" ry="11" fill="#2a2a2a" />
        <circle cx="50" cy="37" r="4" fill="#2a2a2a" />

        {/* Antennae */}
        <path d="M48 34 Q43 26 40 22" stroke="#2a2a2a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M52 34 Q57 26 60 22" stroke="#2a2a2a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="40" cy="22" r="2" fill="#2a2a2a" />
        <circle cx="60" cy="22" r="2" fill="#2a2a2a" />

        {/* Wings with flapping - orange/gold color */}
        <motion.path
          d="M47 43 Q24 34 26 52 Q28 63 47 55"
          fill="#e8a84c"
          animate={{ d: [
            "M47 43 Q24 34 26 52 Q28 63 47 55",
            "M47 43 Q34 38 35 52 Q36 59 47 55",
            "M47 43 Q24 34 26 52 Q28 63 47 55"
          ]}}
          transition={{ duration: 0.22, repeat: Infinity }}
        />
        <motion.path
          d="M47 55 Q30 63 32 72 Q38 76 47 62"
          fill="#f0c078"
          animate={{ d: [
            "M47 55 Q30 63 32 72 Q38 76 47 62",
            "M47 55 Q37 66 38 71 Q41 75 47 62",
            "M47 55 Q30 63 32 72 Q38 76 47 62"
          ]}}
          transition={{ duration: 0.22, repeat: Infinity }}
        />
        <motion.path
          d="M53 43 Q76 34 74 52 Q72 63 53 55"
          fill="#e8a84c"
          animate={{ d: [
            "M53 43 Q76 34 74 52 Q72 63 53 55",
            "M53 43 Q66 38 65 52 Q64 59 53 55",
            "M53 43 Q76 34 74 52 Q72 63 53 55"
          ]}}
          transition={{ duration: 0.22, repeat: Infinity }}
        />
        <motion.path
          d="M53 55 Q70 63 68 72 Q62 76 53 62"
          fill="#f0c078"
          animate={{ d: [
            "M53 55 Q70 63 68 72 Q62 76 53 62",
            "M53 55 Q63 66 62 71 Q59 75 53 62",
            "M53 55 Q70 63 68 72 Q62 76 53 62"
          ]}}
          transition={{ duration: 0.22, repeat: Infinity }}
        />

        {/* Wing spots */}
        <circle cx="36" cy="50" r="3" fill="#fff" opacity="0.5" />
        <circle cx="64" cy="50" r="3" fill="#fff" opacity="0.5" />
      </motion.svg>

      {/* The word "Bloom" */}
      <motion.span
        className="text-burgundy italic relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Bloom
      </motion.span>
    </div>
  );
}
