import { db } from "../lib/db";

export async function getUsuarios() {
    const usuarios = await db.usuario.findMany();

    return usuarios;
}