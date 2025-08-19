"use client";

import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SolarProjectPage() {
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
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/s.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              40MW Solar PV Plant Project
            </h1>
            <div className="flex items-center justify-center gap-2 text-lg mb-8">
              <span>National Projects Implementation</span>
              <span>/</span>
              <span>Solar Project</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
            About Busunju, Pader 40MW Solar PV Plant Project
          </Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
            CSR
          </Button>
        </div>

        {/* Solar Farm Image */}
        <div className="mb-16">
          <Image
            src="/s1.jpg"
            alt="Aerial view of solar farm installation"
            className="w-full h-96 object-cover rounded-lg"
            width={200}
            height={200}
          />
        </div>

        {/* Key Assumptions Section */}
        <div className="bg-yellow-400 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">
            Key Assumptions & Standards
          </h2>
          <div className="space-y-4 text-black">
            <p className="text-lg leading-relaxed">
              The electrical works for the Busunju pader Project are designed
              and executed based on several key assumptions and compliance with
              internationally recognized standards to ensure quality, efficiency
              and safety.
            </p>
            <p className="text-lg leading-relaxed">
              The electrical works for the{" "}
              <strong>Busunju Pader Project</strong> cover all activities
              necessary for the design, supply, installation, testing, and
              commissioning of electrical systems required to generate,
              transmit, and integrate 40MW of solar energy into the national
              grid.
            </p>
            <p className="text-lg leading-relaxed">
              This scope ensures the plant&apos;s operational efficiency, safety
              and compliance with local and international standards.
            </p>
          </div>
        </div>

        {/* Project Capacity Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            1. Project Capacity and Phasing
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="w-32 h-32 rounded-3xl overflow-hidden">
                <Image
                  src="/s1.jpg"
                  alt="Phase 1 solar panels"
                  className="w-full h-full object-cover"
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="text-xl font-semibold">Phase 1</h3>
              <p className="text-gray-700 leading-relaxed">
                Focused on delivering the initial 20MW with associated
                electrical infrastructure.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-32 h-32 rounded-3xl overflow-hidden">
                <Image
                  src="/s2.jpeg"
                  alt="Phase 2 solar panels"
                  className="w-full h-full object-cover"
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="text-xl font-semibold">Phase 2</h3>
              <p className="text-gray-700 leading-relaxed">
                Completion of the remaining 20MW, including grid connection
                enhancements.
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            All electrical designs, material procurement and installations will
            align with these phased implementation timelines.
          </p>
        </div>

        {/* Technology Selection */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">2. Technology Selection</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
              <span>
                <strong>Monocrystalline Solar Panels</strong> are assumed for
                their high efficiency and reliability in Ugandan climatic
                conditions.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
              <span>
                <strong>String Inverters</strong> are selected for scalability
                and ease of maintenance.
              </span>
            </li>
          </ul>
        </div>

        {/* Grid Integration */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">3. Grid Integration</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            The 10km <strong>loop-in, loop-out transmission line</strong> to the
            nearest substation will operate at medium voltage (33kV).
            Synchronization with Uganda&apos;s national grid will adhere to the
            Uganda Electricity Distribution Company Limited (UEDCL)
            interconnection requirements.
          </p>

          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/s3.jpeg"
              alt="Grid integration work"
              className="w-full h-full object-cover"
              width={200}
              height={200}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <p className="text-white text-xl font-semibold text-center px-4">
                DC to AC converters and step-up transformers are used for grid
                compatibility.
              </p>
            </div>
          </div>
        </div>

        {/* Site-Specific Conditions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            4. Site-Specific Conditions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The site in Busunju, Pader, has high solar irradiance, averaging{" "}
            <strong>5-6 peak sun hours/day</strong>, making it suitable for a
            utility-scale PV plant.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Soil conditions allow for trenching and grounding systems without
            significant geological challenges.
          </p>
        </div>

        {/* Environmental and Safety */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            5. Environmental and Safety Considerations
          </h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
              <span>
                Compliance with national and international standards (IEC,
                IEEE).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
              <span>
                Provisions for earthing and bonding to ensure safety and
                reliability.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
              <span>
                The project assumes minimal disruption to the local ecosystem
                and complies with Environmental and Social Impact Assessment
                (ESIA) findings.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
              <span>
                Adequate safety measures, including grounding and surge
                protection are integrated into all electrical designs.
              </span>
            </li>
          </ul>
        </div>

        {/* Purpose Section */}
        <div className="bg-yellow-400 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">Purpose</h2>
          <ul className="space-y-4 text-black text-lg">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
              <span>
                <strong>Consistency:</strong> Ensures uniformity across all
                project phases.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
              <span>
                <strong>Safety:</strong> Guarantees protection for personnel,
                equipment, and the environment.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
              <span>
                <strong>Reliability:</strong> Provides a robust and long-lasting
                electrical system.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
              <span>
                <strong>Compliance:</strong> Adheres to local and international
                codes for smooth project approval and grid integration.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg z-50"
          size="icon"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
