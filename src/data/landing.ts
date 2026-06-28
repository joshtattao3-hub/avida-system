import {
  Bell,
  Building2,
  CalendarCheck,
  CreditCard,
  FileText,
  HandCoins,
  KeyRound,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Wrench,
} from "lucide-react";
import type { AmenityItem, FeatureItem, StatItem, TestimonialItem } from "@/types/landing";

export const navItems = ["Home", "Features", "About", "Contact"];

export const stats: StatItem[] = [
  { label: "Residents", value: 1280, suffix: "+", description: "Active homeowners and tenants served" },
  { label: "Occupied Units", value: 92, suffix: "%", description: "Managed across tower communities" },
  { label: "Maintenance Requests", value: 36, description: "Pending items visible to management" },
  { label: "Visitor Registrations", value: 418, description: "Logged monthly with reception teams" },
  { label: "Monthly Collections", value: 98, suffix: "%", description: "Tracked dues and payments" },
  { label: "Announcements", value: 24, description: "Community updates published this month" },
];

export const features: FeatureItem[] = [
  {
    title: "Resident Portal",
    description: "A single digital home for requests, documents, payments, and community updates.",
    icon: KeyRound,
  },
  {
    title: "Visitor Registration",
    description: "Pre-register guests and keep front desk verification clean, fast, and traceable.",
    icon: UserCheck,
  },
  {
    title: "Maintenance Requests",
    description: "Submit repair tickets with photos, priority, status tracking, and clear updates.",
    icon: Wrench,
  },
  {
    title: "Billing & Payments",
    description: "Make dues, assessments, and payment reminders easier to review and reconcile.",
    icon: CreditCard,
  },
  {
    title: "Amenity Reservations",
    description: "Reserve shared spaces with availability windows and management approvals.",
    icon: CalendarCheck,
  },
  {
    title: "Package Tracking",
    description: "Notify residents when parcels arrive and keep handoffs organized at reception.",
    icon: PackageCheck,
  },
  {
    title: "Announcements",
    description: "Publish advisories, events, reminders, and policy updates across the community.",
    icon: Bell,
  },
  {
    title: "Digital Documents",
    description: "Give residents secure access to policies, forms, permits, and move-in guidelines.",
    icon: FileText,
  },
];

export const steps: FeatureItem[] = [
  {
    title: "Resident submits request",
    description: "Requests are sent through a polished digital form with clear categories and details.",
    icon: Sparkles,
  },
  {
    title: "Management reviews",
    description: "Property teams triage, assign, and coordinate work from one operational view.",
    icon: ShieldCheck,
  },
  {
    title: "Resident receives updates",
    description: "Progress notifications help residents stay informed without repeated follow-ups.",
    icon: HandCoins,
  },
];

export const amenities: AmenityItem[] = [
  {
    title: "Swimming Pool",
    meta: "Open-air leisure deck",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Gym",
    meta: "Wellness and fitness studio",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Function Hall",
    meta: "Private celebrations and gatherings",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Basketball Court",
    meta: "Active community recreation",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Meeting Room",
    meta: "Quiet space for focused work",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Mia Reyes",
    role: "Resident",
    quote: "The portal makes daily condo living feel calm. Requests, visitors, and announcements are finally in one place.",
    initials: "MR",
  },
  {
    name: "Anton Lim",
    role: "Property Manager",
    quote: "Our team can see what needs attention faster, prioritize work, and keep residents updated with less back-and-forth.",
    initials: "AL",
  },
  {
    name: "Jessa Cruz",
    role: "Reception Staff",
    quote: "Visitor and package tracking gives the lobby team a much clearer workflow during busy hours.",
    initials: "JC",
  },
];

export const footerLinks = [
  "Home",
  "Features",
  "Resident Portal",
  "Privacy Policy",
  "Terms & Conditions",
];

export const heroHighlights = [
  { icon: Building2, label: "Premium residence operations" },
  { icon: ShieldCheck, label: "Secure resident services" },
  { icon: Bell, label: "Real-time community updates" },
];
