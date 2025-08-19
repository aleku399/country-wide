"use client";

import { motion } from "framer-motion";
import { Users, BarChart3, Calculator, Building2 } from "lucide-react";

const directorates = [
  {
    icon: Users,
    title: "Strategic Coordination & Implementation",
    delay: 0.1,
  },
  {
    icon: BarChart3,
    title: "Monitoring and Evaluation",
    delay: 0.2,
  },
  {
    icon: Calculator,
    title: "Directorate for Administration and Finance",
    delay: 0.3,
  },
  {
    icon: Building2,
    title: "Directorate in charge of Disaster Preparedness",
    delay: 0.4,
  },
];

export default function DirectoratesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-4"
          >
            OUR DIRECTORATES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight"
          >
            We have several directorates, each with distinct roles and
            responsibilities. These directorates work collectively to fulfill
            our mandate and contribute to the nation&apos;s progress
          </motion.h2>
        </div>

        {/* Directorates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {directorates.map((directorate, index) => {
            const IconComponent = directorate.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: directorate.delay }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="w-20 h-20 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                  {directorate.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
