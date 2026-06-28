import { motion } from "framer-motion";
import { steps } from "@/data/landing";
import { SectionHeader } from "@/components/landing/SectionHeader";

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="how-it-works-title">
      <div className="section-shell">
        <SectionHeader
          eyebrow="How it works"
          title="A calmer way to move requests forward"
          description="Clear handoffs keep residents informed and give property teams the structure they need to respond quickly."
        />
        <div className="relative mt-16 grid gap-6 lg:grid-cols-3">
          <div className="absolute left-1/2 top-14 hidden h-px w-[68%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="relative rounded-2xl border border-secondary/8 bg-white p-7 text-center shadow-soft"
            >
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-secondary text-white shadow-lift">
                <step.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <div className="mx-auto mt-5 grid h-8 w-8 place-items-center rounded-full bg-accent text-sm font-extrabold text-secondary">
                {index + 1}
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-secondary">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-secondary/64">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
