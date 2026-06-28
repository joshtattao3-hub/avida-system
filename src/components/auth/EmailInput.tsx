import type { InputHTMLAttributes } from "react";
import { Mail } from "lucide-react";
import { cn } from "@/utils/cn";

type EmailInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export function EmailInput({ label = "Email Address", error, className, id = "email", ...props }: EmailInputProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-bold text-secondary">
        {label}
      </label>
      <div className="group mt-2 flex h-12 items-center gap-3 rounded-2xl border border-secondary/12 bg-white px-4 shadow-sm transition focus-within:border-primary/45 focus-within:shadow-soft">
        <Mail className="h-4 w-4 text-secondary/38 group-focus-within:text-primary" aria-hidden="true" />
        <input
          id={id}
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn("h-full min-w-0 flex-1 bg-transparent text-sm font-medium text-secondary outline-none placeholder:text-secondary/36", className)}
          {...props}
        />
      </div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-primary">
          {error}
        </p>
      ) : null}
    </div>
  );
}
