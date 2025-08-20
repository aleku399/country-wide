"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function SecretariatHero() {
  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/slide1.jpg)",
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
          Sustainable Development Goals
        </motion.h1>

        {/* Breadcrumb */}
        <motion.div
          className="flex items-center justify-center space-x-2 text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span>Country Wide Projects Implementation</span>
          <ChevronRight className="w-4 h-4" />
          <span>Sustainable Development Goals</span>
        </motion.div>
      </div>
    </section>
  );
}
