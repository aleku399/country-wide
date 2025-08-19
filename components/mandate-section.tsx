"use client";

import { motion } from "framer-motion";

const mandateItems = [
  {
    title:
      "Coordinate the Monitoring and Evaluation of the implementation of Government Policies and Programmes.",
  },
  {
    title:
      "Undertake Coordination of the implementation of the National Development Plan (NDP)",
  },
  {
    title:
      "Coordinate the implementation of Government Policies, Programmes and Projects",
  },
];

export default function MandateSection() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(/feature-one-shape-1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mandateItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  MANDATE
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-6 leading-tight">
                {item.title}
              </h3>

              <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
