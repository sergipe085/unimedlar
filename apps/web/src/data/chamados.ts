import { db } from "@/schemas/lib/db";

export async function getChamados() {
    const chamados = await db.chamado.findMany();

    return chamados;
}