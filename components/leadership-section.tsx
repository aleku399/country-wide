"use client";

import { motion } from "framer-motion";

const leadershipData = [
  {
    id: 1,
    name: "Mr Mugabi Christopher",
    position: "Senior Financial controller",
    description:
      "Guides financial decisions by establishing, monitoring, and enforcing policies and procedures. Protects assets by establishing, monitoring and enforcing internal controls. Monitors and confirms financial condition by conducting audits and providing information to external auditors",
  },
  {
    id: 2,
    name: "Mr John Mark Mugisha",
    position: "Senior Procurement officer",
    description:
      "Identify reliable vendors and suppliers and establish and maintain strong relationships and negotiate favorable terms and resolve any issues or disputes that may arise. Evaluate vendor performance, including quality, pricing, and delivery time",
  },
  {
    id: 3,
    name: "Ms Rosemary Agaba",
    position: "Committee Secretary",
    description:
      "Support the Chair in ensuring the smooth functioning of the Management Committee",
  },
];

export default function LeadershipSection() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      {/* Leadership Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-12">OUR LEADERSHIP</h2>

        <div className="space-y-8">
          {leadershipData.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-l-4 border-gray-200 pl-6"
            >
              <div className="flex items-start gap-4">
                <span className="text-lg font-semibold text-gray-600 min-w-[2rem]">
                  {leader.id}.
                </span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {leader.name}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    {leader.position}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {leader.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
