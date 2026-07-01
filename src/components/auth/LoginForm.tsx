import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { EmailInput } from "@/components/auth/EmailInput";
import { FormError } from "@/components/auth/FormError";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { PrimaryButton } from "@/components/auth/PrimaryButton";
import { useAuth } from "@/contexts/AuthContext";
import { redirectToDashboard } from "@/hooks/useAuthRedirect";
import { loginSchema, type LoginFormValues } from "@/utils/authSchemas";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { error, login, status, clearError } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "", rememberMe: true },
  });

  const onSubmit = handleSubmit(async (values) => {
    clearError();
    try {
      const user = await login({ type: "staff", ...values });
      redirectToDashboard(navigate, user);
    } catch {
      return;
    }
  });

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      <FormError message={error} />
      <EmailInput placeholder="admin@avida.com" error={errors.email?.message} {...register("email")} />
      <PasswordInput
        placeholder="Enter your password"
        error={errors.password?.message}
        isVisible={showPassword}
        onToggleVisibility={() => setShowPassword((value) => !value)}
        {...register("password")}
      />
      <div className="flex items-center justify-between gap-4">
        <label className="flex items-center gap-2 text-sm font-semibold text-secondary/68">
          <input
            type="checkbox"
            className="focus-ring h-4 w-4 rounded border-secondary/20 text-primary accent-primary"
            {...register("rememberMe")}
          />
          Remember Me
        </label>
        <Link to="/forgot-password" className="focus-ring rounded-full text-sm font-bold text-primary hover:text-primary/80">
          Forgot Password
        </Link>
      </div>
      <PrimaryButton type="submit" isLoading={status === "loading"}>
        Sign In
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </PrimaryButton>
      <div className="rounded-2xl bg-secondary/5 p-4 text-sm leading-6 text-secondary/64">
        Try <strong>pmo@avida.com</strong>, <strong>reception@avida.com</strong>, <strong>accounting@avida.com</strong>, or{" "}
        <strong>admin@avida.com</strong> with password <strong>password123</strong>.
      </div>
    </form>
  );
}
