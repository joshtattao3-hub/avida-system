import { amenities } from "@/data/landing";
import { AmenityCard } from "@/components/landing/AmenityCard";
import { SectionHeader } from "@/components/landing/SectionHeader";

export function AmenitiesSection() {
  return (
    <section className="bg-secondary py-20 text-white sm:py-28">
      <div className="section-shell">
        <div className="[&_h2]:text-white [&_p:last-child]:text-white/70">
          <SectionHeader
            eyebrow="Amenities"
            title="Spaces designed around comfort, wellness, and community"
            description="Showcase reservations and resident amenities with a polished visual rhythm that feels worthy of the property."
          />
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {amenities.map((amenity, index) => (
            <AmenityCard key={amenity.title} amenity={amenity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
