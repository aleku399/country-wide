"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function BackgroundSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">GET TO KNOW US</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-red-600"></div>
                <div className="w-2 h-2 border-2 border-red-600 rounded-full bg-white"></div>
                <div className="w-8 h-0.5 bg-red-600"></div>
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Background</h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              National Projects Implementation has been at the forefront of promoting efficient and impactful
              implementation of government initiatives. Over the years, we have built a strong reputation for our
              expertise in strategic coordination, monitoring and evaluation, disaster preparedness, special programs,
              and efficient administration and finance
            </p>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="relative h-64 sm:h-72 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/mast.png"
                alt="Industrial drilling rig infrastructure project"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-64 sm:h-72 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/coffee.png"
                alt="Agricultural development and rural empowerment"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
