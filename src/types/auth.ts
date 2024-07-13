import { z } from "zod";

export const signUpForm = z.object({
    email: z.string().email("This email doesn't appear valid."),
    password: z.string().min(5, "Password must be at least 5 characters long."),
    confirmPassword: z.string(),
});
