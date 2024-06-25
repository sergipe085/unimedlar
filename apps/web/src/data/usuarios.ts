import { db } from "@/schemas/lib/db";

export async function getUsuarios() {
    const usuarios = await db.usuario.findMany();

    return usuarios;
}