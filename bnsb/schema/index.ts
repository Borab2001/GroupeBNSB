import * as z from "zod";

export const EmailSchema = z.object({
    firstName: z.string().min(1).min(1),
    lastName: z.string().min(1).min(1),
    email: z.string().min(1),
    subject: z.string().min(1).min(1).max(150),
    message: z.string().min(1).max(1000)
});