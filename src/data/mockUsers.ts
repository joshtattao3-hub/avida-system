import type { MockUser, UserRole } from "@/types/auth";

export const roleLabels: Record<UserRole, string> = {
  resident: "Resident",
  pmo: "Property Management Office",
  reception: "Reception Staff",
  accounting: "Accounting Staff",
  admin: "Administrator",
};

export const roleDashboardPaths: Record<UserRole, string> = {
  resident: "/resident/dashboard",
  pmo: "/pmo/dashboard",
  reception: "/reception/dashboard",
  accounting: "/accounting/dashboard",
  admin: "/admin/dashboard",
};

export const mockUsers: MockUser[] = [
  {
    id: "user-resident",
    name: "Mia Reyes",
    email: "resident@avida.com",
    customerCode: "1234567890",
    accountType: "owner",
    password: "password123",
    role: "resident",
    dashboardPath: roleDashboardPaths.resident,
  },
  {
    id: "user-pmo",
    name: "Miguel Pajela",
    email: "pmo@avida.com",
    password: "password123",
    role: "pmo",
    dashboardPath: roleDashboardPaths.pmo,
  },
  {
    id: "user-reception",
    name: "Nichole Lozano",
    email: "reception@avida.com",
    password: "password123",
    role: "reception",
    dashboardPath: roleDashboardPaths.reception,
  },
  {
    id: "user-accounting",
    name: "Nico Santos",
    email: "accounting@avida.com",
    password: "password123",
    role: "accounting",
    dashboardPath: roleDashboardPaths.accounting,
  },
  {
    id: "user-admin",
    name: "Joshua Tattao",
    email: "admin@avida.com",
    password: "password123",
    role: "admin",
    dashboardPath: roleDashboardPaths.admin,
  },
];
