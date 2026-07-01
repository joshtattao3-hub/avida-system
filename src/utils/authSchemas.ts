import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email address is required.").email("Enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
  rememberMe: z.boolean(),
});

export const residentLoginSchema = z.object({
  customerCode: z
    .string()
    .min(1, "Customer Code is required.")
    .regex(/^\d{10}$/, "Customer Code must be exactly 10 numeric digits."),
  accountType: z.enum(["owner", "tenant"], {
    message: "Choose an account type.",
  }),
  password: z.string().min(8, "Password must be at least 8 characters."),
  rememberMe: z.boolean(),
});

export const forgotPasswordSchema = z.object({
  email: z.string().min(1, "Email address is required.").email("Enter a valid email address."),
});

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .regex(/[A-Z]/, "Include at least one uppercase letter.")
      .regex(/[a-z]/, "Include at least one lowercase letter.")
      .regex(/[0-9]/, "Include at least one number."),
    confirmPassword: z.string().min(1, "Please confirm your new password."),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type LoginFormValues = z.infer<typeof loginSchema>;
export type ResidentLoginFormValues = z.infer<typeof residentLoginSchema>;
export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;
