export type UserRole = "resident" | "pmo" | "reception" | "accounting" | "admin";
export type ResidentAccountType = "owner" | "tenant";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  dashboardPath: string;
};

export type MockUser = AuthUser & {
  password: string;
  customerCode?: string;
  accountType?: ResidentAccountType;
};

export type StaffLoginCredentials = {
  type: "staff";
  email: string;
  password: string;
  rememberMe: boolean;
};

export type ResidentLoginCredentials = {
  type: "resident";
  customerCode: string;
  accountType: ResidentAccountType;
  password: string;
  rememberMe: boolean;
};

export type LoginCredentials = StaffLoginCredentials | ResidentLoginCredentials;

export type AuthStatus = "idle" | "loading" | "authenticated" | "error";
