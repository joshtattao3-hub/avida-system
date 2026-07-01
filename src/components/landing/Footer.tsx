import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { footerLinks } from "@/data/landing";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-secondary/10 bg-white">
      <div className="section-shell py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.9fr_0.7fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-base font-extrabold text-white">
                AV
              </span>
              <div>
                <p className="text-sm font-extrabold uppercase text-secondary">Avida Towers Alabang</p>
                <p className="text-xs font-semibold text-secondary/60">Digital condominium management</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-secondary/62">
              A premium public homepage concept for a modern condominium community and resident management platform.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-extrabold text-secondary">Quick Links</h2>
            <div className="mt-4 grid gap-3">
              {footerLinks.map((link) => (
                <a key={link} href="#home" className="focus-ring rounded text-sm font-medium text-secondary/62 hover:text-primary">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-extrabold text-secondary">Contact Information</h2>
            <div className="mt-4 grid gap-3 text-sm text-secondary/64">
              <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Alabang–Zapote Rd, cor Prime Street, New Alabang Village, Muntinlupa, 1780</p>
              <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /> +63 2 8888 0000</p>
              <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> management@avidaalabang.example</p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-extrabold text-secondary">Social Media</h2>
            <div className="mt-4 flex gap-2">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <Button key={index} variant="secondary" size="icon" aria-label={`Social link ${index + 1}`}>
                  <Icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-secondary/10 pt-6 text-sm text-secondary/54 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Avida Towers Alabang. All rights reserved.</p>
          <p>Designed for premium residential community operations.</p>
        </div>
      </div>
    </footer>
  );
}
