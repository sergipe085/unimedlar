import { db } from "../lib/db";
import { LoginDTO } from "@/schemas/loginSchema";
import { sign } from "jsonwebtoken";

export async function signin({ login, password }: LoginDTO) {
    const user = await db.usuario.findUnique({
        where: {
            login
        },
        include: {
            gerente: true,
            cuidador: {
                include: {
                    pacientes: true
                }
            }
        }
    })

    if (!user) {
        return null;
    }

    if (user.senha != password) {
        return null
    }

    const jwt = sign({
        user
    }, process.env.JWT_SECRET ?? "secret");

    return {
        user,
        token: jwt
    }
}