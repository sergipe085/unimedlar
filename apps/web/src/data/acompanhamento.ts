import { db } from "../lib/db";

export async function getAcompanhamentos() {
    const acompanhamentos = await db.acompanhamento.findMany();

    return acompanhamentos;
}

export async function getDetalhesAcompanhamento(id: string) {
    const acompanhamento = await db.acompanhamento.findUnique({
        where: {
            id
        },
        include: {
            atendimentos: {
                include: {
                    procedimentos: true,
                }
            },
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

    return acompanhamento
}