"use client"

import { motion } from "framer-motion"

export default function DirectoratesHero() {
  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/d.png)",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Directorates
        </motion.h1>

        {/* Breadcrumb */}
        <motion.nav
          className="absolute bottom-8 left-8 text-sm"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-white/80">National Projects Implementation</span>
          <span className="mx-2 text-white/60">/</span>
          <span className="text-white">Directorates</span>
        </motion.nav>
      </div>
    </section>
  )
}
