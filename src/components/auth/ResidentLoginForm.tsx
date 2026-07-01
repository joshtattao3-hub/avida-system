import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { FormError } from "@/components/auth/FormError";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { PrimaryButton } from "@/components/auth/PrimaryButton";
import { useAuth } from "@/contexts/AuthContext";
import { redirectToDashboard } from "@/hooks/useAuthRedirect";
import { cn } from "@/utils/cn";
import { residentLoginSchema, type ResidentLoginFormValues } from "@/utils/authSchemas";

const accountTypes = [
  { value: "owner", label: "Owner" },
  { value: "tenant", label: "Tenant" },
] as const;

export function ResidentLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { error, login, status, clearError } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResidentLoginFormValues>({
    resolver: zodResolver(residentLoginSchema),
    defaultValues: { customerCode: "", accountType: "owner", password: "", rememberMe: true },
  });

  const onSubmit = handleSubmit(async (values) => {
    clearError();
    try {
      const user = await login({ type: "resident", ...values });
      redirectToDashboard(navigate, user);
    } catch {
      return;
    }
  });

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      <FormError message={error} />

      <div>
        <label htmlFor="customerCode" className="text-sm font-bold text-secondary">
          Customer Code
        </label>
        <div className="group mt-2 flex h-12 items-center gap-3 rounded-2xl border border-secondary/12 bg-white px-4 shadow-sm transition focus-within:border-primary/45 focus-within:shadow-soft">
          <BadgeCheck className="h-4 w-4 text-secondary/38 group-focus-within:text-primary" aria-hidden="true" />
          <input
            id="customerCode"
            type="text"
            inputMode="numeric"
            autoComplete="username"
            maxLength={10}
            placeholder="1234567890"
            aria-invalid={Boolean(errors.customerCode)}
            aria-describedby={errors.customerCode ? "customerCode-error customerCode-help" : "customerCode-help"}
            className="h-full min-w-0 flex-1 bg-transparent text-sm font-medium text-secondary outline-none placeholder:text-secondary/36"
            {...register("customerCode")}
          />
        </div>
        <p id="customerCode-help" className="mt-2 text-sm leading-6 text-secondary/58">
          Enter the 10-digit Customer Code provided by Avida.
        </p>
        {errors.customerCode ? (
          <p id="customerCode-error" className="mt-2 text-sm font-medium text-primary">
            {errors.customerCode.message}
          </p>
        ) : null}
      </div>

      <fieldset>
        <legend className="text-sm font-bold text-secondary">Account Type</legend>
        <div className="mt-2 grid grid-cols-2 gap-3">
          {accountTypes.map((item) => (
            <label
              key={item.value}
              className={cn(
                "flex h-12 cursor-pointer items-center justify-center rounded-2xl border border-secondary/12 bg-white px-4 text-sm font-bold text-secondary/70 shadow-sm transition hover:border-primary/30 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2",
                "has-[:checked]:border-primary/45 has-[:checked]:bg-primary/8 has-[:checked]:text-primary",
              )}
            >
              <input type="radio" value={item.value} className="sr-only" {...register("accountType")} />
              {item.label}
            </label>
          ))}
        </div>
        {errors.accountType ? (
          <p className="mt-2 text-sm font-medium text-primary">{errors.accountType.message}</p>
        ) : null}
      </fieldset>

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
        Try Customer Code <strong>1234567890</strong>, account type <strong>Owner</strong>, and password{" "}
        <strong>password123</strong>.
      </div>
    </form>
  );
}
