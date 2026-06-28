import { CheckCircle2 } from "lucide-react";

type FormSuccessProps = {
  message?: string | null;
};

export function FormSuccess({ message }: FormSuccessProps) {
  if (!message) return null;

  return (
    <div className="flex items-start gap-3 rounded-2xl border border-emerald-600/16 bg-emerald-600/8 p-4 text-sm font-medium text-emerald-700" role="status">
      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" />
      <span>{message}</span>
    </div>
  );
}
