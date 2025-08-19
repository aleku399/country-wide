"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SDGCoordinationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const coordinationStructure = [
    {
      title: "Policy Coordination Committee (PCC)",
      description:
        "This is the highest structure, and has the mandate to review implementation and provide policy guidance. It is chaired by the Prime Minister and it comprises of Members of Cabinet and Heads of Cooperation and Agencies.",
    },
    {
      title: "Implementation Steering Committee (ISC)",
      description:
        "This is responsible for reviewing progress and recommending policy proposals to the PCC. This committee is chaired by the Head of Public Service and Secretary to Cabinet and it is comprising of Permanent Secretaries and Heads of Agencies. ISC meets twice a year.",
    },
    {
      title: "National SDG Taskforce",
      description:
        "This comprises of technical officers from lead agencies of the Technical Working Groups (TWGs) chaired by the Permanent Secretary of OPM.",
    },
    {
      title: "Technical Working Groups (TWGs)",
      description: "These include the following:",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Adoption of the SDG 2030 Agenda in Uganda
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed mb-12">
            <p>
              After the adoption of the 2030 Agenda, Uganda is one of the first
              countries that participated in the first High-Level Political
              Forum in 2016 where it prepared and presented its first National
              Voluntary Review Report. Uganda, therefore, holds a great symbolic
              position in the implementation and achievement of SDGs globally.
            </p>
            <p>
              In 2016, the Government of Uganda developed a framework to guide
              the Coordination of the implementation of the 2030 Agenda and its
              associated SDGs under the leadership of the National Projects
              Implementations Organization. This framework was approved by
              Cabinet and Parliament and it brings together all players both
              state and non-state actors including local governments to deliver
              on the SDGs and the 2030 Agenda.
            </p>
            <p>
              The National SDG Coordination Framework provides for five
              multi-stakeholder Technical Working Groups (TWGs) comprising of
              Sector Working Groups (SWGs); Development Partners; Private
              Sector; and Civil Society. The TWGs are the backbone of the SDG
              Coordination Framework and they meet quarterly and submit the
              required reports to the SDG Secretariat to inform and drive SDG
              implementation in Uganda.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            SDG Coordination Structure
          </h3>

          <div className="space-y-8">
            {coordinationStructure.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {index + 1}. {item.title}:
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
