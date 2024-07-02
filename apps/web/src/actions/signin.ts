import { db } from "../lib/db";
import { LoginDTO } from "@/schemas/loginSchema";
import { sign } from "jsonwebtoken";

export async function signin({ login, password, expoNotificationToken }: LoginDTO) {
    const user = await db.usuario.findUnique({
        where: {
            login
        },
        include: {
            gerente: true,
            cuidador: true
        }
    })

    if (expoNotificationToken) {
        await db.usuario.update({
            where: {
                id: user?.id
            },
            data: {
                expoNotificationToken
            }
        })
    }

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