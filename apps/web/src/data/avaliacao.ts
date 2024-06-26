import { db } from "@/lib/db";


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

export async function realizarFeedback(visitaId: string, feedback: string) {
    const avaliacao = await db.avaliacaoVisita.upsert({
        where: {
            visita: {
                id: visitaId
            }
        },
        create: {
            feedback: feedback
        },
        update: {
            feedback: feedback,
        }
    });

    console.log(avaliacao)

    return avaliacao;
}