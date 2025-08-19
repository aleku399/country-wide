"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutHero() {
  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about.jpg"
          alt="National Projects Implementation Officials"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-6xl md:text-7xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About
        </motion.h1>
      </div>

      {/* Breadcrumb */}
      <motion.div
        className="absolute bottom-8 left-8 z-10"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <nav className="flex items-center space-x-2 text-white">
          <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
            National Projects Implementation
          </Link>
          <ChevronRight className="h-4 w-4 text-white/60" />
          <span className="text-white text-sm font-medium">About Us</span>
        </nav>
      </motion.div>
    </section>
  )
}
