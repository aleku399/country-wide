"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SDGOverviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const characteristics = [
    {
      title: "Ambitious",
      description:
        "With 17 Goals, 169 targets and more than 230 indicators, the SDGs are the most ambitious development framework in the world to date.",
    },
    {
      title: "Universal",
      description:
        "Unlike the MDGs, SDGs are universally applicable and will be implemented by developing as well as developed countries all over the world.",
    },
    {
      title: "Holistic",
      description:
        "The Goals are interconnected, indivisible, and balance the three dimensions of sustainable development i.e. Economic, Social and Environmental meaning that to eradicate poverty, there must be economic growth, social protection and environmental sustainability.",
    },
    {
      title: "Inclusive",
      description:
        "SDGs are for all of us and can only be achieved through partnerships. Government as well as all other stakeholders in Uganda including civil society and the private sector – riding high throughout the negotiations, have a shared responsibility of ensuring that no one is left behind by 2030.",
    },
  ];

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What are the Sustainable Development Goals?
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              In September 2015, while Uganda held the UN presidency, the 192
              Member States of the United Nations (UN) again adopted a historic
              resolution committing themselves to the 2030 Agenda for
              Sustainable Development. Agenda 2030 and its associated SDGs
              informs and guides global and national development.
            </p>
            <p>
              The Sustainable Development Goals (SDGs) are a set of 17
              ambitious, transformative and universal Goals with a total of 169
              targets and 232 indicators that will guide national and local
              development by 2030. They aim at eradicating poverty through a
              focus on partnerships, people, planet, prosperity, and peace.
            </p>
            <p>
              SDGs are different from all other international development
              frameworks considering that they are more ambitious, universal,
              holistic and inclusive as follows:
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {characteristics.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}:
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
