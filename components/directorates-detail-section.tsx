"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const directorates = [
  {
    title: "Strategic Coordination & Implementation",
    image: "/d1.png",
    description:
      "This directorate is responsible for coordinating the implementation of government policies, programs, and projects. They ensure alignment among various stakeholders, facilitate collaboration, and drive effective implementation strategies.",
  },
  {
    title: "Monitoring and Evaluation",
    image: "/d2.png",
    description:
      "The Monitoring and Evaluation directorate plays a crucial role in assessing the progress, impact, and effectiveness of government initiatives. They employ rigorous data collection and analysis techniques to provide evidence-based insights for decision-making and continuous improvement.",
  },
  {
    title: "Directorate in charge of Disaster Preparedness",
    image: "/d3.png",
    description:
      "This directorate focuses on building capacities for disaster prevention, preparedness, and response. They work to safeguard lives and minimize the impact of disasters. Additionally, they provide support and assistance to refugees, ensuring their safety and promoting their integration into society.",
  },
  {
    title: "Directorate in Charge of Special Programs",
    image: "/d4.png",
    description:
      "This directorate oversees the implementation of special government policies and programs tailored to specific regions. They address region-specific challenges, foster development, and ensure equitable growth in Northern Uganda, Karamoja, Luwero-Rwenzori, Bunyoro, and Teso Sub-regions.",
  },
  {
    title: "Directorate for Administration and Finance",
    image: "/d.png",
    description:
      "The Directorate for Administration and Finance ensures efficient internal operations, including administration, resource allocation, and financial management. They uphold transparency, accountability, and prudent financial practices to support the effective implementation of projects and programs.",
  },
];

export default function DirectoratesDetailSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directorates.map((directorate, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={directorate.image || "/placeholder.svg"}
                  alt={directorate.title}
                  className="w-full h-full object-cover"
                  width={200}
                  height={400}
                  
                />
                {/* Red accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {directorate.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {directorate.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
