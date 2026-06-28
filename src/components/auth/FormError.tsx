import { AlertCircle } from "lucide-react";

type FormErrorProps = {
  message?: string | null;
};

export function FormError({ message }: FormErrorProps) {
  if (!message) return null;

  return (
    <div className="flex items-start gap-3 rounded-2xl border border-primary/16 bg-primary/8 p-4 text-sm font-medium text-primary" role="alert">
      <AlertCircle className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" />
      <span>{message}</span>
    </div>
  );
}
