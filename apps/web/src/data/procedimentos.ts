import { db } from "../lib/db";

export async function getProcedimentos() {
    const procedimentos = await db.procedimento.findMany({
        include: {
            materiais: true
        }
    });

    return procedimentos;
}

export async function getProcedimentoById(id: string) {
    const procedimentos = await db.procedimento.findUnique({
        where: {
            id
        },
        include: {
            materiais: true
        }
    });

    return procedimentos;
}