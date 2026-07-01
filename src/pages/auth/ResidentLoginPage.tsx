import { FormCard } from "@/components/auth/FormCard";
import { ResidentLoginForm } from "@/components/auth/ResidentLoginForm";
import { AuthLayout } from "@/layouts/AuthLayout";

export function ResidentLoginPage() {
  return (
    <AuthLayout>
      <FormCard
        eyebrow="Resident portal"
        title="Resident sign in"
        description="Access your Avida resident workspace with your Customer Code and account type."
      >
        <ResidentLoginForm />
      </FormCard>
    </AuthLayout>
  );
}
