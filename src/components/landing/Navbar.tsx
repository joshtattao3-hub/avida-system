import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/landing";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "border-b border-white/70 bg-white/82 shadow-soft backdrop-blur-xl" : "bg-white/55 backdrop-blur-md",
      )}
    >
      <nav className="section-shell flex h-20 items-center justify-between" aria-label="Primary navigation">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-full" aria-label="Avida Towers Alabang home">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-base font-extrabold text-white shadow-lift">
            AV
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold uppercase text-secondary">Avida Towers</span>
            <span className="block text-xs font-semibold text-secondary/60">Alabang</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="focus-ring rounded-full text-sm font-semibold text-secondary/72 transition hover:text-primary"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/login" className={buttonVariants({ variant: "secondary", size: "sm" })}>
            Resident Login
          </Link>
          <a href="#contact" className={buttonVariants({ size: "sm" })}>
            Request Assistance
          </a>
        </div>

        <button
          type="button"
          className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-secondary/10 bg-white text-secondary lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-secondary/10 bg-white/95 px-5 pb-6 shadow-soft backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="focus-ring rounded-2xl px-4 py-3 text-sm font-semibold text-secondary/75 hover:bg-secondary/5"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <Link
                to="/login"
                className={buttonVariants({ variant: "secondary" })}
                onClick={() => setIsOpen(false)}
              >
                Resident Login
              </Link>
              <a href="#contact" className={buttonVariants()} onClick={() => setIsOpen(false)}>
                Request Assistance
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
