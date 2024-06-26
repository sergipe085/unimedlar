import { db } from "../lib/db";

export async function getChamados() {
    const chamados = await db.chamado.findMany();

    return chamados;
}