import type { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import type { UserRole } from "@/types/auth";

type ProtectedRouteProps = PropsWithChildren<{
  allowedRoles: UserRole[];
}>;

export function ProtectedRoute({ allowedRoles, children }: ProtectedRouteProps) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    const loginPath = allowedRoles.length === 1 && allowedRoles[0] === "resident" ? "/resident-login" : "/login";
    return <Navigate to={loginPath} replace state={{ from: location.pathname }} />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to={user.dashboardPath} replace />;
  }

  return <>{children}</>;
}
