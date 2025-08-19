"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SDGSecretariatSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mandates = [
    "Steer the coordination function, support, oversee and harmonize the implementation of the SDG coordination framework;",
    "Coordinate monitoring and assessment of local implementation and progress of the SDG 2030 Agenda in Uganda;",
    "Build Strategic Partnerships with Private Sector on financing and innovation for SDGs;",
    "Provide technical support, advice and expertise to the MDAs, private sector, civil society and academia to accelerate the implementation of the SDG agenda; and",
    "Be the hub of SDG information and data for the government of Uganda and other stakeholders.",
  ];

  return (
    <section className="py-16 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            The SDG Secretariat
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed mb-8">
            <p>
              In order to accelerate the implementation of SDGs in Uganda,
              Cabinet and the United Nations Country Team agreed to establish an
              SDG Secretariat in 2019 and designated the SDG Focal Point
              Minister, Hon. Karoro Okurut who is the Minister for General
              Duties in the Office of the Prime Minister. The Minister provides
              overall political leadership for SDG through presentation of
              reports on SDG implementation and policy recommendations to
              Cabinet.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            About the SDG Secretariat
          </h3>

          <div className="space-y-6 text-gray-600 leading-relaxed mb-8">
            <p>
              Opened in April 2019, the SDG Secretariat supports the government,
              United Nations, Civil Society, Private Sector, and Academia in
              achieving the Sustainable Development Goals. The Secretariat is
              headed by Dr. Albert Byamugisha as The Senior Technical Adviser.
              The SDG Secretariat is housed under the Office of the Prime
              Minister and is mandated to:
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <ul className="space-y-4">
              {mandates.map((mandate, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-600 leading-relaxed">
                    {mandate}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="mt-8 text-gray-600 leading-relaxed">
            <p>
              The SDG Coordination framework is currently being supported by the
              government of Uganda and the United Nations Country Team through
              the Resident Coordinator&apos;s office.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
