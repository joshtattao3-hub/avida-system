import { Link } from "react-router-dom";
import { ArrowRight, Building2, KeyRound, ShieldCheck } from "lucide-react";
import { PrimaryButton } from "@/components/auth/PrimaryButton";
import { SecondaryButton } from "@/components/auth/SecondaryButton";

export function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="inline-flex rounded-full border border-primary/12 bg-white/80 px-4 py-2 text-sm font-bold text-primary shadow-soft">
            Avida Towers Alabang
          </p>
          <h1 className="mt-7 text-5xl font-extrabold tracking-normal text-secondary sm:text-6xl">
            Avida Management System
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-secondary/68">
            A premium frontend prototype for secure resident and condominium operations access.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/login">
              <PrimaryButton type="button">
                Resident Login
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </PrimaryButton>
            </Link>
            <Link to="/verify-email">
              <SecondaryButton type="button">Verify Email</SecondaryButton>
            </Link>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white bg-white/84 p-6 shadow-lift backdrop-blur-xl">
          <div className="grid gap-4">
            {[
              { icon: KeyRound, title: "Mock Authentication", text: "Frontend-only credential flow with typed sessions." },
              { icon: ShieldCheck, title: "RBAC Protected Routes", text: "Resident, PMO, reception, accounting, and admin access." },
              { icon: Building2, title: "Avida Design System", text: "Luxury minimal palette, rounded cards, and subtle motion." },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-secondary/8 bg-white p-5">
                <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-extrabold text-secondary">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-secondary/60">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
