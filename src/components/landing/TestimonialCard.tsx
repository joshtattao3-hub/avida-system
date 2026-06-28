import { motion } from "framer-motion";
import type { TestimonialItem } from "@/types/landing";

type TestimonialCardProps = {
  testimonial: TestimonialItem;
  index: number;
};

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="rounded-2xl border border-secondary/8 bg-white p-7 shadow-soft"
    >
      <p className="text-base leading-8 text-secondary/76">"{testimonial.quote}"</p>
      <div className="mt-8 flex items-center gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-sm font-extrabold text-primary">
          {testimonial.initials}
        </div>
        <div>
          <h3 className="font-extrabold text-secondary">{testimonial.name}</h3>
          <p className="text-sm font-medium text-secondary/56">{testimonial.role}</p>
        </div>
      </div>
    </motion.article>
  );
}
