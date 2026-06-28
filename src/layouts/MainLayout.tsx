import type { PropsWithChildren } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen overflow-hidden text-ink">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
