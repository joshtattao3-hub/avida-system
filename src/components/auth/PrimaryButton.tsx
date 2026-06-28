import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { cn } from "@/utils/cn";

type PrimaryButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children: ReactNode;
  isLoading?: boolean;
};

export function PrimaryButton({ children, className, disabled, isLoading, ...props }: PrimaryButtonProps) {
  return (
    <motion.button
      whileHover={{ y: disabled ? 0 : -1 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={cn(
        "focus-ring inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 text-sm font-bold text-white shadow-lift transition disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <LoadingSpinner /> : null}
      {children}
    </motion.button>
  );
}
