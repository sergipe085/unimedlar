import { db } from "../lib/db";

export async function getAtendimentos() {
    const atendimentos = await db.atendimento.findMany({
        include: {
            paciente: true,
        }
    });

    return atendimentos;
}

export async function getDetalhesAtendimento(id: string) {
    const atendimento = await db.atendimento.findUnique({
        where: {
            id
        },
        include: {
            paciente: {
                include: {
                    cuidador: {
                        include: {
                            usuario: true
                        }
                    }
                }
            }
        }
    })

    return atendimento
}