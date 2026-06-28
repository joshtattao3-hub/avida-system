import type { InputHTMLAttributes } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { cn } from "@/utils/cn";

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  isVisible: boolean;
  onToggleVisibility: () => void;
};

export function PasswordInput({
  label = "Password",
  error,
  className,
  id = "password",
  isVisible,
  onToggleVisibility,
  ...props
}: PasswordInputProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-bold text-secondary">
        {label}
      </label>
      <div className="group mt-2 flex h-12 items-center gap-3 rounded-2xl border border-secondary/12 bg-white px-4 shadow-sm transition focus-within:border-primary/45 focus-within:shadow-soft">
        <Lock className="h-4 w-4 text-secondary/38 group-focus-within:text-primary" aria-hidden="true" />
        <input
          id={id}
          type={isVisible ? "text" : "password"}
          autoComplete="current-password"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn("h-full min-w-0 flex-1 bg-transparent text-sm font-medium text-secondary outline-none placeholder:text-secondary/36", className)}
          {...props}
        />
        <button
          type="button"
          className="focus-ring rounded-full p-1 text-secondary/54 transition hover:text-primary"
          onClick={onToggleVisibility}
          aria-label={isVisible ? "Hide password" : "Show password"}
        >
          {isVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-primary">
          {error}
        </p>
      ) : null}
    </div>
  );
}
