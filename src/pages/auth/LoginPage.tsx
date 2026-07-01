import { FormCard } from "@/components/auth/FormCard";
import { LoginForm } from "@/components/auth/LoginForm";
import { AuthLayout } from "@/layouts/AuthLayout";

export function StaffLoginPage() {
  return (
    <AuthLayout>
      <FormCard
        eyebrow="Staff portal"
        title="Welcome back"
        description="Access the Avida workspace for administrators and operations staff."
      >
        <LoginForm />
      </FormCard>
    </AuthLayout>
  );
}
