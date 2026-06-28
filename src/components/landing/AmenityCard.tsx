import { motion } from "framer-motion";
import type { AmenityItem } from "@/types/landing";

type AmenityCardProps = {
  amenity: AmenityItem;
  index: number;
};

export function AmenityCard({ amenity, index }: AmenityCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border border-white bg-white shadow-soft"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={amenity.image}
          alt={`${amenity.title} amenity at Avida Towers Alabang`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-extrabold text-secondary">{amenity.title}</h3>
        <p className="mt-2 text-sm font-medium text-secondary/60">{amenity.meta}</p>
      </div>
    </motion.article>
  );
}
