import { api } from "@/lib/api";

type Request = {
    username: string;
    password: string;
    expoNotificationToken: string;
}

export async function login(req: Request) {
    const { data } = await api.post("/login", {
        ...req,
        token_notification: req.expoNotificationToken
    });

    return data.data;
}