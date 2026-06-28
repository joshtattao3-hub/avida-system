import { AmenitiesSection } from "@/components/landing/AmenitiesSection";
import { CTASection } from "@/components/landing/CTASection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { StatsSection } from "@/components/landing/StatsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";

export function LandingPage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <HowItWorks />
      <AmenitiesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
