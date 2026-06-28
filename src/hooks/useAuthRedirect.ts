import { NavigateFunction } from "react-router-dom";
import type { AuthUser } from "@/types/auth";

export function redirectToDashboard(navigate: NavigateFunction, user: AuthUser) {
  navigate(user.dashboardPath, { replace: true });
}
