import { stats } from "@/data/landing";
import { StatCard } from "@/components/landing/StatCard";

export function StatsSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
