import type { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Building2, ShieldCheck, Sparkles } from "lucide-react";
import { BrandLogo } from "@/components/auth/BrandLogo";

const highlights = [
  { icon: ShieldCheck, label: "Role-based access control" },
  { icon: Building2, label: "Resident and operations portals" },
  { icon: Sparkles, label: "Premium Avida experience" },
];

export function AuthLayout({ children }: PropsWithChildren) {
  return (
    <main className="grid min-h-screen lg:grid-cols-[1.02fr_0.98fr]">
      <section className="relative hidden overflow-hidden bg-secondary p-10 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,162,39,0.24),transparent_28rem),linear-gradient(135deg,rgba(155,17,30,0.35),transparent_44%)]" />
        <div className="relative">
          <BrandLogo />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative max-w-xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Avida Management System</p>
          <h2 className="mt-5 text-5xl font-extrabold tracking-normal">
            Secure access for every community role.
          </h2>
          <p className="mt-6 text-lg leading-9 text-white/72">
            A polished authentication experience for residents, front desk staff, property managers, accounting,
            and administrators.
          </p>
          <div className="mt-9 grid gap-3">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur">
                <item.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <span className="text-sm font-semibold text-white/82">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <p className="relative text-sm text-white/46">Protected by mock RBAC for frontend prototyping.</p>
      </section>

      <section className="flex min-h-screen flex-col px-5 py-6 sm:px-8">
        <div className="flex items-center justify-between">
          <div className="lg:hidden">
            <BrandLogo />
          </div>
          <Link
            to="/"
            className="focus-ring ml-auto inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-secondary/66 transition hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
        </div>
        <div className="mx-auto flex w-full max-w-md flex-1 items-center py-10">{children}</div>
      </section>
    </main>
  );
}
