import AboutHero from "@/components/about-hero"
import BackgroundSection from "@/components/background-section"
import ValuesObjectivesSection from "@/components/values-objectives-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <BackgroundSection />
      <ValuesObjectivesSection />
    </div>
  )
}
