"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const values = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in all aspects of our work, ensuring the highest standards of quality and performance.",
  },
  {
    title: "Transparency",
    description:
      "We believe in transparency and accountability, fostering trust and confidence among our stakeholders.",
  },
  {
    title: "Collaboration",
    description:
      "We foster collaboration among government institutions, stakeholders, and communities to achieve collective goals.",
  },
  {
    title: "Innovation",
    description:
      "We embrace innovation and continuously seek new approaches to address challenges and drive positive change.",
  },
  {
    title: "Integrity",
    description:
      "We adhere to the highest ethical standards, upholding integrity in all our endeavors.",
  },
];

const objectives = [
  "Ensure effective coordination, monitoring, and evaluation of government policies, programs, and projects.",
  "Foster collaboration and partnerships to achieve national development goals.",
  "Enhance disaster preparedness, response, and management capacities.",
  "Implement region-specific policies and programs to address unique regional challenges.",
  "Ensure efficient administration and financial management for effective implementation.",
];

export default function ValuesObjectivesSection() {
  const [expandedValue, setExpandedValue] = useState<number | null>(null);

  const toggleValue = (index: number) => {
    setExpandedValue(expandedValue === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Our Values */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Our Values:
            </h2>
            <div className="border border-gray-200 bg-white rounded-lg overflow-hidden">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <button
                    onClick={() => toggleValue(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-medium text-gray-700">
                      {value.title}
                    </span>
                    <motion.div
                      animate={{ rotate: expandedValue === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {expandedValue === index ? (
                        <Minus className="w-5 h-5 text-gray-500" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-500" />
                      )}
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {expandedValue === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Objectives */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Objectives:
            </h2>
            <div className="space-y-6">
              {objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <span className="text-lg font-semibold text-red-600 flex-shrink-0">
                    {index + 1}.
                  </span>
                  <p className="text-gray-700 leading-relaxed">{objective}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
