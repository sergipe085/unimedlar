import { db } from "@/lib/db";


interface bodyAvaliacao {
    visitasId: string;
    nota: number;
    feedback: string;

}

export async function realizarAvaliacao(visitaId: string, nota: number) {
    const { avaliacao } = await db.visita.update({
        where: {
            id: visitaId
        },
        data: {
            avaliacao: {
                create: {
                    nota
                }
            }
        },
        include: {
            avaliacao: true
        }
    });

    console.log(avaliacao)

    return avaliacao;
}

export async function realizarAvaliacaoFeedback(visitaId: string, feedback: string) {

    const { avaliacao } = await db.visita.update({
        where: {
            id: visitaId
        },
        data: {
            avaliacao: {
                update: {
                    data: {
                        feedback
                    }
                }
            }
        },
        include: {
            avaliacao: true
        }
    });

    console.log(avaliacao)

    return avaliacao;
}