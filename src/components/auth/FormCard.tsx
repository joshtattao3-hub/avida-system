import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type FormCardProps = PropsWithChildren<{
  eyebrow: string;
  title: string;
  description: string;
}>;

export function FormCard({ eyebrow, title, description, children }: FormCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full rounded-[1.5rem] border border-white/80 bg-white/88 p-6 shadow-lift backdrop-blur-xl sm:p-8"
      aria-labelledby="auth-title"
    >
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h1 id="auth-title" className="mt-3 text-3xl font-extrabold tracking-normal text-secondary sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-sm leading-7 text-secondary/64">{description}</p>
      <div className="mt-8">{children}</div>
    </motion.section>
  );
}
