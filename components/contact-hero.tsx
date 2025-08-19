"use client"

import { motion } from "framer-motion"

export default function ContactHero() {
  return (
    <div className="relative h-96 bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/slide4.jpeg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact
          </motion.h1>

          {/* Breadcrumb */}
          <motion.div
            className="absolute bottom-8 left-8 text-white/80"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-sm">National Projects Implementation</span>
            <span className="mx-2">/</span>
            <span className="text-sm text-white">Contact</span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
