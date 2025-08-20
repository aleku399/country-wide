"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

export default function DrdipProjectPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/coffee.png)",
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
            <span>Country Wide Projects Implementation</span>
            <span>/</span>
            <span>Development Response to Displacement Impact Project (DRDIP)</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Development Response to Displacement Impact Project (DRDIP)
          </motion.h1>
        </div>
      </section>

      {/* Project Background Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Development Response to Displacement Impacts Project (DRDIP)</h2>
          <h3 className="text-xl font-semibold mb-6 text-gray-800">Project Background</h3>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              DRDIP is a World Bank funded multi-regional project covering four countries in the East African Region.
              DRDIP-Uganda, is five-year projected implemented under the National Projects Implement. The project
              provides development and direct income support to the poor and vulnerable within refugee hosting districts
              in Uganda. DRDIP Uganda is funded by a USD 150 million grant and a USD 50 million IDA loan, approved by
              the World Bank in 2017 and became effective on June 17<sup>th</sup> 2017.
            </p>

            <p>
              The development objective of DRDIP is to improve access to basic social services (health, education, water
              and sanitation), expand economic opportunities and enhance environmental management for refugee host
              district communities and settlements. The project addresses the social economic, and environmental impacts
              of protracted refugee presence in the host communities and refugee settlements through interlinked
              investment components.
            </p>

            <p>
              DRDIP is currently being implemented in 15 Refugee hosting districts of Arua, Koboko, Yumbe, Moyo,
              Adjumani, Obongi, Madi-Okollo and Terego in the West Nile sub region), Lamwo, in Acholi sub region; Hoima,
              Kikuube, Kiryandongo in the Bunyoro sub region; Isingiro, Kyegegwa and Kamwenge in the South-Western
              sub-region. DRDIP components include; (i) Supporting investments in social services and economic
              infrastructure and building of the capacity of local Government units (ii), Environmental Management
              activities (iii), Investment in traditional and non-traditional livelihoods and (iv), support of the
              national and local level project coordination activities
            </p>
          </div>
        </div>

        {/* Context Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Context</h3>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              For over five decades, Uganda has provided asylum to people fleeing war and persecution from many
              countries, including its neighbors. Uganda is a party to key refugee conventions and international human
              rights treaties, and currently hosts over 1.35 million refugees, the majority from South Sudan (75%), the
              Democratic Republic of Congo (17%), Burundi (3%), and Somalia (3%). When renewed conflict broke out in
              South Sudan in July 2016, an unprecedented number of refugees came to Uganda, doubling the refugee
              population in less than seven months. Uganda has since become the largest refugee-hosting country in
              Africa, with refugees making up 3.5% of the country&apos;s total population of 39 million. The economy faces
              challenges, compounded by adverse weather and spill-over from the civil unrest in South Sudan.
            </p>

            <p>
              In response to the impacts of forced displacement on refugee-hosting countries and communities in HOA, the
              proposed operation is a multi-country development response by the respective Governments of Djibouti,
              Ethiopia, and Uganda. The proposed regional operation addresses the unmet social, economic and
              environmental needs of the local communities both host and displaced (refugees and returnees) in targeted
              areas of the three proposed project countries. The projection Uganda will be implemented in the districts
              of Adjumani, Arua, Moyo Yumbe, Koboko, Isingiro, Kamwenge, Kiryadongo, Kyegegwa, and Lamwo.
            </p>
          </div>
        </div>

        {/* Project Components Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Project Components:</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-lg font-semibold text-red-600 min-w-[2rem]">1.</span>
              <p className="text-gray-700">
                <strong>Supporting investments in social services and economic infrastructure:</strong> Building
                capacity of local Government units to improve service delivery and infrastructure development.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-lg font-semibold text-red-600 min-w-[2rem]">2.</span>
              <p className="text-gray-700">
                <strong>Environmental Management activities:</strong> Addressing environmental degradation and promoting
                sustainable natural resource management in refugee hosting areas.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-lg font-semibold text-red-600 min-w-[2rem]">3.</span>
              <p className="text-gray-700">
                <strong>Investment in traditional and non-traditional livelihoods:</strong> Supporting income-generating
                activities and livelihood opportunities for both host communities and refugees.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-lg font-semibold text-red-600 min-w-[2rem]">4.</span>
              <p className="text-gray-700">
                <strong>National and local level project coordination:</strong> Ensuring effective project management,
                coordination, and monitoring at all implementation levels.
              </p>
            </div>
          </div>
        </div>

        {/* Implementation Areas */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Implementation Areas</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-800">West Nile Sub-region:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Arua</li>
                <li>Koboko</li>
                <li>Yumbe</li>
                <li>Moyo</li>
                <li>Adjumani</li>
                <li>Obongi</li>
                <li>Madi-Okollo</li>
                <li>Terego</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Other Sub-regions:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Lamwo (Acholi sub-region)</li>
                <li>Hoima, Kikuube, Kiryandongo (Bunyoro sub-region)</li>
                <li>Isingiro, Kyegegwa, Kamwenge (South-Western sub-region)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
            About DRDIP Project Details
          </Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">CSR</Button>
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
  )
}
