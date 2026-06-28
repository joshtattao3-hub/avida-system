import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import { EmailInput } from "@/components/auth/EmailInput";
import { FormCard } from "@/components/auth/FormCard";
import { FormSuccess } from "@/components/auth/FormSuccess";
import { PrimaryButton } from "@/components/auth/PrimaryButton";
import { AuthLayout } from "@/layouts/AuthLayout";
import { forgotPasswordSchema, type ForgotPasswordValues } from "@/utils/authSchemas";

export function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    setIsLoading(true);
    setSuccess(null);
    await new Promise((resolve) => window.setTimeout(resolve, 650));
    setSuccess(`A reset link has been prepared for ${values.email}. This is a mock confirmation.`);
    setIsLoading(false);
  });

  return (
    <AuthLayout>
      <FormCard
        eyebrow="Account recovery"
        title="Reset your password"
        description="Enter your registered email address and we will simulate a secure reset link."
      >
        <form className="space-y-5" onSubmit={onSubmit} noValidate>
          <FormSuccess message={success} />
          <EmailInput placeholder="resident@avida.com" error={errors.email?.message} {...register("email")} />
          <PrimaryButton type="submit" isLoading={isLoading}>
            Send Reset Link
            <Send className="h-4 w-4" aria-hidden="true" />
          </PrimaryButton>
          <Link to="/login" className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-bold text-primary">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Login
          </Link>
        </form>
      </FormCard>
    </AuthLayout>
  );
}
