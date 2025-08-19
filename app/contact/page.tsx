import ContactFormSection from "@/components/conatact-form-section";
import ContactHero from "@/components/contact-hero";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactFormSection />
    </main>
  );
}
