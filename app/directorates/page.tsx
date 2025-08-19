import DirectoratesHero from "@/components/directorates-hero"
import DirectoratesDetailSection from "@/components/directorates-detail-section"
import DirectoratesSection from "@/components/directorates-section"

export default function DirectoratesPage() {
  return (
    <main className="min-h-screen">
      <DirectoratesHero />
      <DirectoratesDetailSection />
      <DirectoratesSection />
    </main>
  )
}
