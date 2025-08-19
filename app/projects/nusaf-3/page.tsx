"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function NusafProjectPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/s2.jpeg)",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-sm mb-8"
          >
            <span>National Projects Implementation</span>
            <span>/</span>
            <span>Northern Uganda Social Action Fund (NUSAF) 3</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Northern Uganda Social Action Fund (NUSAF) 3
          </motion.h1>
        </div>
      </section>

      {/* Project Background Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            The Third Northern Uganda Social Action Fund (NUSAF3)
          </h2>
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Project Background
          </h3>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              The Third Northern Uganda Social Action Fund (NUSAF3) is five-year
              Social Protection and Affirmative Programme implemented under the
              National Project Implementations. NUSAF3 is financed by a World
              Bank IDA loan of US $130 million and became effective in March
              2016. The Project Development Objective (PDO) is &quot;to provide
              effective income support to and build the resilience of poor and
              vulnerable households in Northern Uganda. NUSAF3 builds on the
              lessons of both the first phases (NUSAF1 AND NUSAF2) and aims to
              contribute to the operationalizing of the Uganda Social Protection
              Policy.
            </p>

            <p>
              The project has four components. The first component contains two
              sub-components; Labor Intensive Public Works and Disaster Risk
              Financing - that provide temporary/seasonal employment
              opportunities for poor and vulnerable households and has the
              capability of being scaled up in response to disasters in selected
              pilot areas.
            </p>

            <p>
              The second component, Livelihood Investment Support, also contains
              two subcomponents - Improved Household Investment Support Program
              (IHISP) and Sustainable Livelihood Pilot (SLP) – and provides
              livelihood support to poor and vulnerable households to enable
              them to increase their productive assets and incomes.
            </p>

            <p>
              The third component - Strengthened Transparency, Accountability
              and Anti-Corruption (TAAC) covers activities implemented by the
              Inspectorate of Government (IG) to improve transparency,
              accountability, and anti-corruption efforts in northern Uganda
              both for NUSAF3 and other services.
            </p>

            <p>
              The fourth component - Safety Net Mechanisms and Project
              Management provides institutional support for implementation of
              the project and to help develop the social protection operational
              tools that are envisioned in the draft Uganda Social Protection
              Policy (USPP).
            </p>
          </div>
        </div>

        {/* Objectives Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Objectives:</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-lg font-semibold text-red-600 min-w-[2rem]">
                1.
              </span>
              <p className="text-gray-700">
                To provide effective household income support to and build
                Resilience of the poor and vulnerable household in Northern
                Uganda
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-lg font-semibold text-red-600 min-w-[2rem]">
                2.
              </span>
              <p className="text-gray-700">
                To enhance transparency and accountability in public service
                delivery in northern Uganda
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-lg font-semibold text-red-600 min-w-[2rem]">
                3.
              </span>
              <p className="text-gray-700">
                To strengthen Institutional Capacity to implement, monitor and
                evaluate the project at all levels.
              </p>
            </div>
          </div>
        </div>

        {/* Outputs Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Outputs:</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-lg font-semibold text-red-600 min-w-[2rem]">
                1.
              </span>
              <p className="text-gray-700">
                11,700 households (about 70,200 beneficiaries) supported with
                grants for Livelihood Investment Support (LIS)
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-lg font-semibold text-red-600 min-w-[2rem]">
                2.
              </span>
              <p className="text-gray-700">
                43,084 households (285,500 people) targeted to earn income from
                temporary employment through the Labour Intensive Public Works
                component
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-lg font-semibold text-red-600 min-w-[2rem]">
                3.
              </span>
              <p className="text-gray-700">
                76 integrated sub-watersheds developed (including terraces,
                bunds, flood and gully control structures).
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-lg font-semibold text-red-600 min-w-[2rem]">
                4.
              </span>
              <p className="text-gray-700">Community assets established.</p>
            </div>
            <div className="flex gap-4">
              <span className="text-lg font-semibold text-red-600 min-w-[2rem]">
                5.
              </span>
              <p className="text-gray-700">
                Transparency, Accountability and Anti-Corruption systems (TAAC)
                strengthened
              </p>
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Activities</h3>
          <p className="text-lg font-semibold mb-4 text-gray-800">
            Implementation of PRDP coordinated and monitored
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex gap-4">
              <span className="text-lg font-semibold text-red-600 min-w-[2rem]">
                1.
              </span>
              <p className="text-gray-700">
                Technical, managerial, and administrative support provided to
                districts.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-lg font-semibold text-red-600 min-w-[2rem]">
                2.
              </span>
              <p className="text-gray-700">
                Baseline survey conducted for NUSAF3 3. Training and capacity
                building of communities conducted
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-lg font-semibold text-red-600 min-w-[2rem]">
                3.
              </span>
              <p className="text-gray-700">TST Salaries paid</p>
            </div>
            <div className="flex gap-4">
              <span className="text-lg font-semibold text-red-600 min-w-[2rem]">
                4.
              </span>
              <p className="text-gray-700">
                Effective networking, collaborative, and coordination mechanisms
                with sectors established. Key messages/information on the
                Project disseminated
              </p>
            </div>
          </div>

          <p className="text-lg font-semibold mb-4 text-gray-800">
            Transfers to Government units
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-lg font-semibold text-red-600 min-w-[2rem]">
                1.
              </span>
              <p className="text-gray-700">
                Funds transferred to the beneficiary Local Governments to
                implement sub-projects approved by DEC.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-lg font-semibold text-red-600 min-w-[2rem]">
                2.
              </span>
              <p className="text-gray-700">
                Funds transferred to the Department of Disaster Preparedness and
                Management to implement the Disaster Risk Financing component
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-lg font-semibold text-red-600 min-w-[2rem]">
                3.
              </span>
              <p className="text-gray-700">
                Funds transferred to the MGLSD to support the establishment and
                strengthening of systems to promote the harmonization of the
                direct income support event of the Social protection sector.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
            About NUSAF3 Project Details
          </Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
            CSR
          </Button>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            onClick={scrollToTop}
            className="bg-red-600 hover:bg-red-700 text-white rounded-full p-3 shadow-lg"
            size="icon"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}
