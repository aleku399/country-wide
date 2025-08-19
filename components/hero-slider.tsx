"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowUp } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    title: "Monitoring and Evaluation",
    image: "/slide1.jpeg",
    description:
      "Comprehensive monitoring and evaluation of national projects to ensure effective implementation and accountability.",
  },
  {
    id: 2,
    title: "Disaster Preparedness, Management and Refugees",
    image: "/slide2.jpg",
    description:
      "Strategic coordination for disaster preparedness, emergency management, and refugee support programs.",
  },
  {
    id: 3,
    title: "Government Projects Implementation",
    image: "/slide3.jpg",
    description: "Efficient implementation of government infrastructure and development projects across Uganda.",
  },
  {
    id: 4,
    title: "Strategic Coordination & Implementation",
    image: "/slide4.jpeg",
    description: "Coordinated approach to strategic planning and implementation of national development initiatives.",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            type: "tween",
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="relative h-full w-full">
            <Image
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold transition-colors duration-300 hover:scale-105 transform"
                >
                  Discover More
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-8 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        <button
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-32 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  )
}
