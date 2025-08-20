"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const strategicItems = [
  {
    title: "Presidential Investors Round Table",
    description:
      "The Presidential Investors' Round Table (PIRT), which is chaired by H.E the President, is a high level forum that brings together a select group of both foreign and local investors to advise Government on how to improve the investment climate in the country.The PIRT process and engagement.",
  },
  {
    title: "Sustainable Development Goals",
    description:
      "The Sustainable Development Goals (SDGs) are a set of 17 ambitious, transformative and universal Goals with a total of 169 targets and 232 indicators that will guide national and local development by 2030. They aim at eradicating poverty through a focus on partnerships, people, planet, prosperity, and peace.",
  },
  {
    title: "National Information Platforms for Nutrition (NIPN)",
    description:
      "NIPN aims at creating a platform to bring together and analyse existing nutrition information and data from all sectors. This is in a bid to support the development of evidence-based policies and programmes to improve human nutrition. The NIPN project began in January 2018 with the signing of the contractual agreement",
  },
  {
    title: "National Projects Implementation's Delivery Unit",
    description:
      "The Government of Uganda has established a Delivery Unit in the National Projects Implementation's Office to drive delivery of services to the people of Uganda. Cabinet adopted the NDP II recommendation to set up the Delivery Unit and the Ministry of Public Service has formalised its structure within the National Projects Implementation Organization.",
  },
];

export default function StrategicSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Strategic Coordination & Implementation
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {strategicItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.description}
              </p>
              <Link href={"/projects/drdip"}>
                <button className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors duration-200">
                  See More
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
