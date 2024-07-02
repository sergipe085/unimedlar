import { db } from "@/lib/db";


interface bodyAvaliacao {
    visitasId: string;
    nota: number;
    feedback: string;

}

export async function jaTemAvaliacao(visitaId: string) {
    const visita = await db.visita.findUnique({
        where: {
            id: visitaId
        }
    })

    return visita?.avaliacaoVisitaId != null;
}

export async function realizarAvaliacao(visitaId: string, nota: number, feedback: string, cumpriuHorario: boolean, compareceu: boolean) {
    
    
    const { avaliacao, atendimento } = await db.visita.update({
        where: {
            id: visitaId
        },
        data: {
            avaliacao: {
                create: {
                    nota,
                    feedback,
                     profissionalCumpriuCargaHoraria: cumpriuHorario,
                     profissionalCompareceu: compareceu
                }
            }
        },
        include: {
            avaliacao: true,
            atendimento: true
        }
    });

    if (atendimento?.cooperativaId) {
        await db.visita.update({
            where: {
                id: visitaId
            },
            data: {
                cooperativaResponsavel: {
                    connect: {
                        id: atendimento.cooperativaId
                    }
                } 
            }
        })
    }


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

export async function realizarAvaliacaoComparecimento(visitaId: string, compareceu: boolean) {
    const visita = await db.visita.update({
        where: {
            id: visitaId
        },
        data: {
            compareceuEm: compareceu ? new Date() : null,
            naoCompareceuEm: compareceu ? null : new Date()
        }
    });
    
    return visita;
}