import { Link } from "react-router-dom";
import { LogOut, ShieldCheck } from "lucide-react";
import { PrimaryButton } from "@/components/auth/PrimaryButton";
import { SecondaryButton } from "@/components/auth/SecondaryButton";
import { useAuth } from "@/contexts/AuthContext";
import { roleLabels } from "@/data/mockUsers";
import type { UserRole } from "@/types/auth";

type RoleDashboardPageProps = {
  role: UserRole;
};

export function RoleDashboardPage({ role }: RoleDashboardPageProps) {
  const { logout, user } = useAuth();

  return (
    <main className="min-h-screen px-5 py-8 sm:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center">
        <div className="w-full rounded-[1.75rem] border border-white bg-white/88 p-7 shadow-lift backdrop-blur-xl sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-primary">Protected route</p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-normal text-secondary sm:text-5xl">
                {roleLabels[role]} Dashboard
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-secondary/66">
                This mock page confirms RBAC routing for {user?.name}. Backend dashboards can replace this route later
                without changing the authentication flow.
              </p>
            </div>
            <div className="grid h-20 w-20 place-items-center rounded-[1.5rem] bg-primary/10 text-primary">
              <ShieldCheck className="h-9 w-9" aria-hidden="true" />
            </div>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Link to="/">
              <SecondaryButton type="button">Back to Home</SecondaryButton>
            </Link>
            <PrimaryButton type="button" onClick={logout}>
              Sign Out
              <LogOut className="h-4 w-4" aria-hidden="true" />
            </PrimaryButton>
          </div>
        </div>
      </section>
    </main>
  );
}
