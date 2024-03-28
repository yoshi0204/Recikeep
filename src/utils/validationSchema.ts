import { z, ZodSchema } from "zod";

export const validationSchema: ZodSchema = z
  .object({
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(4, "It has to be at least 4 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
