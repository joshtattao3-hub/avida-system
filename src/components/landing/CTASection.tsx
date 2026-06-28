import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function CTASection() {
  return (
    <section id="contact" className="pb-20 sm:pb-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#9B111E_0%,#2F3430_58%,#C9A227_130%)] p-8 text-white shadow-lift sm:p-12 lg:p-16"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">Avida Towers Alabang</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-normal sm:text-5xl">
              Experience Smarter Condominium Living
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/76">
              Bring resident services, operations, and community communication into one elegant digital platform.
            </p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/login" className={buttonVariants({ variant: "gold", size: "lg" })}>
              Resident Login
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="mailto:management@avidaalabang.example" className={buttonVariants({ variant: "secondary", size: "lg" })}>
              Contact Management
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
