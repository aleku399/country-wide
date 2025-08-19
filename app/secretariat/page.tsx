import SDGOverviewSection from "@/components/sdg-overview-section"
import SDGCoordinationSection from "@/components/sdg-coordination-section"
import SecretariatHero from "@/components/secretariat-hero"
import SDGSecretariatSection from "@/components/sdg-secretrait-section"

export default function SecretariatPage() {
  return (
    <main>
      <SecretariatHero />
      <SDGOverviewSection />
      <SDGSecretariatSection />
      <SDGCoordinationSection />
    </main>
  )
}
