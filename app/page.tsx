import HeroSlider from "@/components/hero-slider"
import MandateSection from "@/components/mandate-section"
import AboutSection from "@/components/about-section"
import DirectoratesSection from "@/components/directorates-section"
import StrategicSection from "@/components/strategic-section"
import StatisticsSection from "@/components/statistics-section"
import ProjectsCarousel from "@/components/projects-carousel"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <MandateSection />
      <AboutSection />
      <DirectoratesSection />
      <StrategicSection />
      <StatisticsSection />
      <ProjectsCarousel />
    </div>
  )
}
