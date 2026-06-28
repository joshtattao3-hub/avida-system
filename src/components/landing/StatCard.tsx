import { useRef } from "react";
import { motion } from "framer-motion";
import type { StatItem } from "@/types/landing";
import { useCountUp } from "@/hooks/useCountUp";

type StatCardProps = {
  stat: StatItem;
  index: number;
};

export function StatCard({ stat, index }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(ref, stat.value);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="rounded-2xl border border-secondary/8 bg-white p-6 shadow-soft"
    >
      <p className="text-4xl font-extrabold text-secondary">
        {count.toLocaleString()}
        {stat.suffix}
      </p>
      <h3 className="mt-4 text-base font-bold text-secondary">{stat.label}</h3>
      <p className="mt-2 text-sm leading-6 text-secondary/62">{stat.description}</p>
    </motion.article>
  );
}
