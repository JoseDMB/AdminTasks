import {z} from "zod";
// This schema is used to validate the data sent by the user when registering a new account
export const registerSchema = z.object({
   username: z.string({ message: "Username is required" }),
    email: z
        .string({ message: "Email is required" })
        .email({ message: "Invalid email address" }),
    password: z
        .string({ message: "Password is required" })
        .min(6, { message: "Password must be at least 6 characters" }),
});

export const loginSchema = z.object({
    email: z.string({
        message: "Email is required"
    }).email(
        {message: "Invalid email address"}),
    password: z.string({
        message: "Password is required"
    }).min(
        6, {message: "Password must be at least 6 characters"})
});
