export type UserRole = "resident" | "pmo" | "reception" | "accounting" | "admin";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  dashboardPath: string;
};

export type MockUser = AuthUser & {
  password: string;
};

export type LoginCredentials = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type AuthStatus = "idle" | "loading" | "authenticated" | "error";
