import { features } from "@/data/landing";
import { FeatureCard } from "@/components/landing/FeatureCard";
import { SectionHeader } from "@/components/landing/SectionHeader";

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white/48 py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Resident-first platform"
          title="Everything your community needs in one refined experience"
          description="A premium digital layer for daily residence operations, designed for residents, front desk teams, and property managers."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
