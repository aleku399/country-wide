"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

export default function TeamHero() {
  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/museveni-factories3.jpg)",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Leadership & Management
        </motion.h1>
      </div>

      {/* Breadcrumb */}
      <motion.div
        className="absolute bottom-8 left-8 flex items-center text-white text-sm"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <span>Country Wide Projects Implementation</span>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span>Our Team</span>
      </motion.div>
    </section>
  )
}
