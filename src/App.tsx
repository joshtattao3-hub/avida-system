import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ProtectedRoute } from "@/routes/ProtectedRoute";
import { MainLayout } from "@/layouts/MainLayout";
import { EmailVerificationPage } from "@/pages/auth/EmailVerificationPage";
import { ForgotPasswordPage } from "@/pages/auth/ForgotPasswordPage";
import { LoginPage } from "@/pages/auth/LoginPage";
import { ResetPasswordPage } from "@/pages/auth/ResetPasswordPage";
import { LandingPage } from "@/pages/LandingPage";
import { RoleDashboardPage } from "@/pages/RoleDashboardPage";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <MainLayout>
              <LandingPage />
            </MainLayout>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route
          path="/resident/*"
          element={
            <ProtectedRoute allowedRoles={["resident"]}>
              <RoleDashboardPage role="resident" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pmo/*"
          element={
            <ProtectedRoute allowedRoles={["pmo"]}>
              <RoleDashboardPage role="pmo" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reception/*"
          element={
            <ProtectedRoute allowedRoles={["reception"]}>
              <RoleDashboardPage role="reception" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/accounting/*"
          element={
            <ProtectedRoute allowedRoles={["accounting"]}>
              <RoleDashboardPage role="accounting" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <RoleDashboardPage role="admin" />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}
