import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { PricingSection } from "@/components/pricing-section"
import { ComparatorSection } from "@/components/comparator-section"
import { TeamSection } from "@/components/team-section"
import { FaqsSection } from "@/components/faqs-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <PricingSection />
      <ComparatorSection />
      <TeamSection />
      <FaqsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

