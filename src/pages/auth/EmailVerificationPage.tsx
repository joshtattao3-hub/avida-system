import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Clock3 } from "lucide-react";
import { FormCard } from "@/components/auth/FormCard";
import { PrimaryButton } from "@/components/auth/PrimaryButton";
import { SecondaryButton } from "@/components/auth/SecondaryButton";
import { AuthLayout } from "@/layouts/AuthLayout";

type VerificationState = "pending" | "success" | "invalid";

const stateContent: Record<
  VerificationState,
  {
    eyebrow: string;
    title: string;
    description: string;
    icon: typeof Clock3;
    iconClass: string;
  }
> = {
  pending: {
    eyebrow: "Verification pending",
    title: "Check your email",
    description: "We have prepared a mock verification message. Open the secure link to activate your account.",
    icon: Clock3,
    iconClass: "bg-accent/18 text-accent",
  },
  success: {
    eyebrow: "Verification complete",
    title: "Email verified",
    description: "Your email address has been verified successfully. You may now continue to the sign in page.",
    icon: CheckCircle2,
    iconClass: "bg-emerald-600/12 text-emerald-700",
  },
  invalid: {
    eyebrow: "Invalid link",
    title: "This link is no longer valid",
    description: "The verification link may have expired or already been used. Request a fresh verification email.",
    icon: AlertTriangle,
    iconClass: "bg-primary/10 text-primary",
  },
};

function getVerificationState(value: string | null): VerificationState {
  if (value === "success" || value === "invalid") return value;
  return "pending";
}

export function EmailVerificationPage() {
  const [params] = useSearchParams();
  const state = getVerificationState(params.get("state"));
  const content = stateContent[state];
  const Icon = content.icon;

  return (
    <AuthLayout>
      <FormCard eyebrow={content.eyebrow} title={content.title} description={content.description}>
        <div className="space-y-6 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className={`mx-auto grid h-28 w-28 place-items-center rounded-[2rem] ${content.iconClass}`}
            aria-hidden="true"
          >
            <Icon className="h-12 w-12" />
          </motion.div>
          <div className="grid gap-3">
            <Link to="/login">
              <PrimaryButton type="button">Go to Login</PrimaryButton>
            </Link>
            <Link to="/forgot-password">
              <SecondaryButton type="button">Request New Link</SecondaryButton>
            </Link>
          </div>
          <p className="text-sm text-secondary/56">
            Preview states: <Link className="font-bold text-primary" to="/verify-email">pending</Link>,{" "}
            <Link className="font-bold text-primary" to="/verify-email?state=success">success</Link>,{" "}
            <Link className="font-bold text-primary" to="/verify-email?state=invalid">invalid</Link>.
          </p>
        </div>
      </FormCard>
    </AuthLayout>
  );
}
