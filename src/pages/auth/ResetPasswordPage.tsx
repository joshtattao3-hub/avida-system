import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { FormCard } from "@/components/auth/FormCard";
import { FormSuccess } from "@/components/auth/FormSuccess";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { PrimaryButton } from "@/components/auth/PrimaryButton";
import { AuthLayout } from "@/layouts/AuthLayout";
import { resetPasswordSchema, type ResetPasswordValues } from "@/utils/authSchemas";
import { getPasswordStrength } from "@/utils/passwordStrength";

export function ResetPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });
  const password = watch("password");
  const strength = getPasswordStrength(password);
  const strengthWidths = ["w-1/5", "w-1/5", "w-2/5", "w-3/5", "w-4/5", "w-full"];
  const strengthWidth = strengthWidths[strength.score];

  const onSubmit = handleSubmit(async () => {
    setIsLoading(true);
    setSuccess(null);
    await new Promise((resolve) => window.setTimeout(resolve, 650));
    setSuccess("Your password has been reset successfully. You can now return to login.");
    setIsLoading(false);
  });

  return (
    <AuthLayout>
      <FormCard
        eyebrow="Set new password"
        title="Create a secure password"
        description="Use a strong password to protect resident and operations information."
      >
        <form className="space-y-5" onSubmit={onSubmit} noValidate>
          <FormSuccess message={success} />
          <PasswordInput
            label="New Password"
            id="password"
            placeholder="Create a new password"
            error={errors.password?.message}
            isVisible={showPassword}
            onToggleVisibility={() => setShowPassword((value) => !value)}
            autoComplete="new-password"
            {...register("password")}
          />
          <div aria-live="polite">
            <div className="h-2 overflow-hidden rounded-full bg-secondary/10">
              <div className={`h-full rounded-full transition-all ${strength.tone} ${strengthWidth}`} />
            </div>
            <p className="mt-2 text-sm font-semibold text-secondary/60">Password strength: {strength.label}</p>
          </div>
          <PasswordInput
            label="Confirm Password"
            id="confirmPassword"
            placeholder="Confirm your new password"
            error={errors.confirmPassword?.message}
            isVisible={showPassword}
            onToggleVisibility={() => setShowPassword((value) => !value)}
            autoComplete="new-password"
            {...register("confirmPassword")}
          />
          <PrimaryButton type="submit" isLoading={isLoading}>
            Reset Password
            <Check className="h-4 w-4" aria-hidden="true" />
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
