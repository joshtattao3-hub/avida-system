import type { LucideIcon } from "lucide-react";

export type StatItem = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type AmenityItem = {
  title: string;
  image: string;
  meta: string;
};

export type TestimonialItem = {
  name: string;
  role: string;
  quote: string;
  initials: string;
};
