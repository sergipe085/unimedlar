import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { Prisma } from "@prisma/client";
import { RedirectType, redirect } from "next/navigation";

export type AuthData = {
    user: Prisma.UsuarioGetPayload<{
        include: {
            gerente: true,
            cuidador: {
                include: {
                    pacientes: true
                }
            }
        }
    }>
}

export async function auth() {
    const cookie = cookies();
    const token = cookie.get("Authorization");

    if (!token?.value) {
        redirect("/login", RedirectType.replace);
    }

    const authData = jwt.verify(token.value, process.env.JWT_SECRET ?? "secret") as AuthData
    console.log(authData)

    return {
        ...authData
    }
}