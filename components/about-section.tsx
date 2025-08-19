"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Target, Crosshair } from "lucide-react";
import Image from "next/image";

const CountingNumber = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 50);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-6xl font-bold text-red-600">
      {count}
    </span>
  );
};

export default function AboutSection() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background Shapes */}
      <motion.div
        className="absolute left-0 top-1/4 opacity-10"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/about-one-shape-1.png"
          alt="Background Shape"
          width={100}
          height={400}
          className="w-auto h-96"
        />
      </motion.div>

      <motion.div
        className="absolute right-0 top-1/3 opacity-10"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Image
          src="/about-one-shape-3.png"
          alt="Background Shape"
          width={300}
          height={400}
          className="w-auto h-80"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image and Number */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96">
              {/* Coat of Arms - positioned behind */}
              <div className="absolute -bottom-20 left-0 z-10">
                <Image
                  src="/coats.png"
                  alt="Uganda Coat of Arms"
                  width={200}
                  height={200}
                  className="w-48 h-48"
                />
              </div>

              {/* President Image - large and in line with content */}
              <div className="absolute top-0 left-16 z-20">
                <Image
                  src="/m7.png"
                  alt="President Museveni"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg w-80 h-auto object-cover"
                />
              </div>

              {/* Animated Number - overlaid on M7 image */}
              <div className="absolute -bottom-8 right-26 z-30">
                <div className="bg-white p-4 rounded-lg shadow-lg border-l-4 border-red-600">
                  <CountingNumber target={10} />
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute right-0 top-1/2 transform translate-x-8 -translate-y-1/2 z-10">
                <div className="grid grid-cols-4 gap-1">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-gray-300 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                GET TO KNOW ABOUT US
              </p>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-red-600"></div>
                <div className="w-2 h-2 border-2 border-red-600 rounded-full"></div>
                <div className="w-8 h-0.5 bg-red-600"></div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About National Projects Implementation
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a dynamic organization committed to driving effective
                implementation and coordination of government policies,
                programs, and projects. Our goal is to achieve sustainable
                development and contribute to the well-being of our nation and
                its citizens.
              </p>
            </div>

            {/* Mission */}
            <motion.div
              className="flex gap-4 p-6 bg-white rounded-lg shadow-sm border-l-4 border-red-600 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="flex-shrink-0"
                whileHover={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors">
                  <Crosshair className="w-6 h-6 text-white" />
                </div>
              </motion.div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Our Mission:
                </h3>
                <p className="text-gray-600">
                  We are dedicated to the effective coordination, monitoring,
                  and evaluation of government policies, programs, and projects
                  to drive national development and welfare.
                </p>
              </div>
              <motion.div
                className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ x: 5 }}
              >
                <div className="w-6 h-6 text-red-600 font-bold text-xl">→</div>
              </motion.div>
            </motion.div>

            {/* Objective */}
            <motion.div
              className="flex gap-4 p-6 bg-white rounded-lg shadow-sm border-l-4 border-red-600"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="flex-shrink-0"
                whileHover={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Objective:
                </h3>
                <p className="text-gray-600">
                  Ensure effective coordination, monitoring, and evaluation of
                  government policies, programs, and projects.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
