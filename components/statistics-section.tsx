"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, UserCheck, Star, Handshake } from "lucide-react";

const StatCard = ({
  icon: Icon,
  value,
  suffix,
  label,
  delay,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let start = 0;
        const end = value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(counter);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="flex items-center space-x-6 p-8 border border-white/20 rounded-lg backdrop-blur-sm"
    >
      <div className="flex-shrink-0">
        <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
      </div>
      <div className="text-left">
        <div className="text-4xl font-bold text-white mb-1">
          {count}
          {suffix}
        </div>
        <div className="text-white/90 text-lg font-medium">{label}</div>
      </div>
    </motion.div>
  );
};

export default function StatisticsSection() {
  const ref = useRef(null);

  const stats = [
    {
      icon: Users,
      value: 200,
      suffix: "+",
      label: "Projects Implemented",
    },
    {
      icon: UserCheck,
      value: 500,
      suffix: "k",
      label: "Beneficiaries Reached",
    },
    {
      icon: Star,
      value: 95,
      suffix: "%",
      label: "Monitoring and Evaluation",
    },
    {
      icon: Handshake,
      value: 30,
      suffix: "+",
      label: "Partnership Collaborations",
    },
  ];

  return (
    <section className="bg-red-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
