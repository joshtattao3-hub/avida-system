export type PasswordStrength = {
  score: number;
  label: string;
  tone: string;
};

export function getPasswordStrength(password: string): PasswordStrength {
  const checks = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[a-z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ];
  const score = checks.filter(Boolean).length;

  if (score <= 1) return { score, label: "Weak", tone: "bg-primary" };
  if (score <= 3) return { score, label: "Good", tone: "bg-accent" };
  return { score, label: "Strong", tone: "bg-emerald-600" };
}
