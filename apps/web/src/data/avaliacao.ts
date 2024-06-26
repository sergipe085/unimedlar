import { db } from "@/schemas/lib/db";

interface bodyAvaliacao {
    visitasId: string;
    nota: number;
    feedback: string;
    
}

export async function realizarAvaliacao(visitaId: string, nota: number) {
    const avaliacao = await db.avaliacaoVisita.create({
        data: {
            visita: {
                connect: {
                    id: visitaId
                }
            },
            nota: nota,
        }
    });

    console.log(avaliacao)

    return avaliacao;
}

export async function realizarAvaliacaoFeedback(visitaId: string, feedback: string) {
    const avaliacao = await db.avaliacaoVisita.create({
        data: {
            visita: {
                connect: {
                    id: visitaId
                }
            },
            feedback: feedback,
        }
    });

    console.log(avaliacao)

    return avaliacao;
}