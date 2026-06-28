import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { heroHighlights } from "@/data/landing";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32">
      <div className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="inline-flex items-center rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-sm font-bold text-primary shadow-soft">
            Premium condominium management for modern living
          </p>
          <h1 className="mt-7 text-5xl font-extrabold tracking-normal text-secondary sm:text-6xl lg:text-7xl">
            Welcome to Avida Towers Alabang
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-secondary/72 sm:text-xl">
            A modern digital condominium management platform designed to simplify daily living for residents and
            streamline operations for property management.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/login" className={buttonVariants({ size: "lg" })}>
              Resident Portal
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="#features" className={buttonVariants({ variant: "secondary", size: "lg" })}>
              Learn More
              <ChevronDown className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-white bg-white/72 p-4 shadow-soft">
                <item.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <span className="text-sm font-semibold leading-5 text-secondary/75">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative"
          aria-label="Modern condominium management preview"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-[linear-gradient(135deg,rgba(155,17,30,0.14),rgba(201,162,39,0.18),rgba(47,52,48,0.08))] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white shadow-lift">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=82"
              alt="Elegant condominium tower exterior"
              className="h-[28rem] w-full object-cover sm:h-[34rem]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/18 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <div className="rounded-2xl border border-white/20 bg-white/92 p-5 shadow-soft backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-primary">Today at Avida</p>
                    <p className="mt-1 text-2xl font-extrabold text-secondary">36 service items</p>
                  </div>
                  <div className="rounded-2xl bg-accent/18 px-4 py-3 text-right">
                    <p className="text-xs font-bold uppercase text-secondary/55">Resolved</p>
                    <p className="text-xl font-extrabold text-secondary">82%</p>
                  </div>
                </div>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-secondary/10">
                  <div className="h-full w-[82%] rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
