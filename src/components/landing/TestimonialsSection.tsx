import { testimonials } from "@/data/landing";
import { SectionHeader } from "@/components/landing/SectionHeader";
import { TestimonialCard } from "@/components/landing/TestimonialCard";

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Community voices"
          title="Built for the people who keep condominium life moving"
          description="Residents and operations teams get a shared digital experience that reduces friction throughout the day."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
