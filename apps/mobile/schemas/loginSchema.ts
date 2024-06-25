import z from "zod";

export const loginSchema = z.object({
    login: z.string(),
    password: z.string()
})

export type LoginDTO = z.infer<typeof loginSchema>;