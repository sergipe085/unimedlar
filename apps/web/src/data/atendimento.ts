import { db } from "../lib/db";

export async function getAtendimentos() {
    const atendimentos = await db.atendimento.findMany({
        select: {
            id: true,
            titulo: true,
            intervaloEmDia: true,
            duracaoEmHoras: true,
            dataInicial: true,
            dataFinal: true,
            paciente: true,
            cooperativaResponsavel: true,
            _count: {
                select: {
                    visitas: true
                }
            },
            visitas: {
                select: {
                    compareceuEm: true,
                    naoCompareceuEm: true
                }
            }
        }
    });

    const atendimentosComContagens = atendimentos.map(atendimento => {
        const quantidadeVisitasCompareceu = atendimento.visitas.filter(visita => !!visita.compareceuEm).length;
        const quantidadeVisitasNaoCompareceu = atendimento.visitas.filter(visita => !!visita.naoCompareceuEm).length;
        const quantidadeVisitasRealizadas = quantidadeVisitasCompareceu + quantidadeVisitasNaoCompareceu;

        return {
            ...atendimento,
            quantidadeVisitas: atendimento._count.visitas,
            quantidadeVisitasRealizadas: quantidadeVisitasRealizadas,
            quantidadeVisitasCompareceu: quantidadeVisitasCompareceu,
            quantidadeVisitasNaoCompareceu: quantidadeVisitasNaoCompareceu,
        };
    });

    return atendimentosComContagens;
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
            },
            procedimentos: {
                include: {
                    medicamento: true,
                    procedimento: true
                }
            }
        }
    })

    return atendimento
}