import MandateHero from "@/components/mandate-hero"
import MandateCardsSection from "@/components/mandate-cards-section"
import MandateSection from "@/components/mandate-section"

export default function MandatePage() {
  return (
    <div className="min-h-screen">
      <MandateHero />
      <MandateSection />
      <MandateCardsSection />
    </div>
  )
}
