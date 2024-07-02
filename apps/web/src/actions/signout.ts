import { db } from "../lib/db";
import { LoginDTO } from "@/schemas/loginSchema";
import { sign } from "jsonwebtoken";
import { cookies } from "next/headers";
import { RedirectType, redirect } from "next/navigation";

export async function signout() {
    const cookie = cookies();
    cookie.set("Authorization", "");
    
    redirect("/login", RedirectType.replace);
}