import { FormCard } from "@/components/auth/FormCard";
import { LoginForm } from "@/components/auth/LoginForm";
import { AuthLayout } from "@/layouts/AuthLayout";

export function LoginPage() {
  return (
    <AuthLayout>
      <FormCard
        eyebrow="Secure sign in"
        title="Welcome back"
        description="Access the right Avida workspace for your resident or operations role."
      >
        <LoginForm />
      </FormCard>
    </AuthLayout>
  );
}
