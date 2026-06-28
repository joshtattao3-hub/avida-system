import { motion } from "framer-motion";
import type { FeatureItem } from "@/types/landing";

type FeatureCardProps = {
  feature: FeatureItem;
  index: number;
};

export function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group rounded-2xl border border-secondary/8 bg-white p-6 shadow-soft transition-shadow hover:shadow-lift"
    >
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <feature.icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-6 text-lg font-extrabold text-secondary">{feature.title}</h3>
      <p className="mt-3 text-sm leading-7 text-secondary/64">{feature.description}</p>
    </motion.article>
  );
}
