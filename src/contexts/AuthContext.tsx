import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { mockUsers } from "@/data/mockUsers";
import type { AuthStatus, AuthUser, LoginCredentials } from "@/types/auth";

type AuthContextValue = {
  user: AuthUser | null;
  status: AuthStatus;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<AuthUser>;
  logout: () => void;
  clearError: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

const storageKey = "avida-auth-user";

function readStoredUser(): AuthUser | null {
  try {
    const stored = window.localStorage.getItem(storageKey) ?? window.sessionStorage.getItem(storageKey);
    return stored ? (JSON.parse(stored) as AuthUser) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => readStoredUser());
  const [status, setStatus] = useState<AuthStatus>(() => (readStoredUser() ? "authenticated" : "idle"));
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (credentials: LoginCredentials) => {
    setStatus("loading");
    setError(null);
    await new Promise((resolve) => window.setTimeout(resolve, 650));

    const matchedUser = mockUsers.find((candidate) => {
      if (credentials.type === "staff") {
        return (
          candidate.role !== "resident" &&
          candidate.email.toLowerCase() === credentials.email.toLowerCase() &&
          candidate.password === credentials.password
        );
      }

      return (
        candidate.role === "resident" &&
        candidate.customerCode === credentials.customerCode &&
        candidate.accountType === credentials.accountType &&
        candidate.password === credentials.password
      );
    });

    if (!matchedUser) {
      const message =
        credentials.type === "staff"
          ? "We could not match those credentials. Please check your email and password."
          : "We could not match those resident credentials. Please check your Customer Code, account type, and password.";
      setStatus("error");
      setError(message);
      throw new Error(message);
    }

    const { password, customerCode, accountType, ...safeUser } = matchedUser;
    setUser(safeUser);
    setStatus("authenticated");
    const storage = credentials.rememberMe ? window.localStorage : window.sessionStorage;
    storage.setItem(storageKey, JSON.stringify(safeUser));
    return safeUser;
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem(storageKey);
    window.sessionStorage.removeItem(storageKey);
    setUser(null);
    setStatus("idle");
    setError(null);
  }, []);

  const clearError = useCallback(() => setError(null), []);

  const value = useMemo(
    () => ({ user, status, error, login, logout, clearError }),
    [clearError, error, login, logout, status, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider.");
  }
  return context;
}
