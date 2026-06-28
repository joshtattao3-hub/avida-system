import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-normal text-secondary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-secondary/70 sm:text-lg">{description}</p>
    </motion.div>
  );
}
