import { Prisma } from "@prisma/client";
import { db } from "../lib/db";

export async function getChamados(args: Prisma.ChamadoFindManyArgs) {
    const chamados = await db.chamado.findMany(args);

    return chamados;
}