import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type SecondaryButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children: ReactNode;
};

export function SecondaryButton({ children, className, disabled, ...props }: SecondaryButtonProps) {
  return (
    <motion.button
      whileHover={{ y: disabled ? 0 : -1 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={cn(
        "focus-ring inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-secondary/12 bg-white px-5 text-sm font-bold text-secondary shadow-soft transition hover:border-primary/25 disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
}
