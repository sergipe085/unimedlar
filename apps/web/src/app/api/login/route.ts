import { signin } from "@/actions/signin";
import { loginSchema } from "@/schemas/loginSchema";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { login, password, expoNotificationToken } = loginSchema.parse(body);

    const authData = await signin({
        login,
        password,
        expoNotificationToken
    })

    if (!authData) {
        return new Response(JSON.stringify({
            status: "error"
        }), {
            status: 200
        })
    }

    const cookie = cookies();
    cookie.set("Authorization", `${authData.token}`);

    return new Response(JSON.stringify({
        user: authData.user,
        token: authData.token
    }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
}