"use client"

import { motion } from "framer-motion"

const mandates = [
  {
    id: 1,
    title: "Monitor and Evaluate implementation of Government Policies and Programmes",
    description:
      "We have the responsibility to monitor and evaluate the implementation of government policies and programs across various sectors. Through comprehensive assessments, data collection, and analysis, we assess the progress, impact, and effectiveness of these initiatives. This information enables evidence-based decision-making and supports continuous improvement efforts.",
    color: "bg-red-500",
    textColor: "text-white",
  },
  {
    id: 2,
    title:
      "Coordinate the implementation of Government Policies, Programmes, and Projects under a National Institutional Framework",
    description:
      "We facilitate the coordination of government policies, programs, and projects to ensure a harmonized and synchronized approach. By fostering collaboration among relevant stakeholders, including government institutions, departments, and implementing agencies, we strive to achieve coherence and efficiency in the implementation process.",
    color: "bg-blue-600",
    textColor: "text-white",
  },
  {
    id: 3,
    title:
      "Coordinate development of capacities for prevention, preparedness, and response to natural and human-induced Disasters and Refugees",
    description:
      "Disaster preparedness, management, and response are crucial aspects of our mandate. We focus on building capacities to prevent, prepare for, and respond to natural and human-induced disasters. Additionally, we provide support and assistance to refugees within our borders, ensuring their safety and promoting their integration into society.",
    color: "bg-teal-500",
    textColor: "text-white",
  },
  {
    id: 4,
    title:
      "Coordinate and monitor the implementation of Special Government Policies and programs for Northern Uganda, Luwero-Rwenzori, Karamoja, Bunyoro, and Teso Affairs",
    description:
      "We are responsible for overseeing the implementation of special government policies and programs tailored to specific regions. Our aim is to address the unique needs and challenges of Northern Uganda, Karamoja, Luwero-Rwenzori, Bunyoro, and Teso Sub-regions. Through targeted interventions and focused development strategies, we work towards fostering inclusive growth and equitable development.",
    color: "bg-orange-500",
    textColor: "text-white",
  },
]

export default function MandateCardsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mandates.map((mandate, index) => (
            <motion.div
              key={mandate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${mandate.color} ${mandate.textColor} p-8 rounded-lg relative overflow-hidden min-h-[400px] flex flex-col`}
            >
              {/* Mandate Number Banner */}
              <div className="absolute top-0 left-0">
                <div className="bg-white text-gray-800 px-4 py-2 text-sm font-bold uppercase tracking-wide">
                  Mandate #{mandate.id}
                </div>
              </div>

              {/* Content */}
              <div className="mt-12 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-6 leading-tight">{mandate.title}</h3>

                <p className="text-lg leading-relaxed mb-8 flex-1">{mandate.description}</p>

                {/* Decorative Element */}
                <div className="w-12 h-1 bg-black/20 rounded"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
