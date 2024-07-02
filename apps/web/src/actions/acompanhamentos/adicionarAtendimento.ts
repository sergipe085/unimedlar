"use server"

import { AdicionarAtendimentoDTO, adicionarAtendimentoSchema } from "@/schemas/acompanhamento";
import { db } from "../../lib/db";
import { Prisma } from "@prisma/client";
import { redirect } from "next/navigation";

export async function adicionarAtendimento(req: AdicionarAtendimentoDTO) {
    console.log(req);

    const data = adicionarAtendimentoSchema.parse(req);

    let duracaoEmHoras = 0;

    for (const procedimento of data.procedimentos) {
        if (!procedimento.medicamentoId && !procedimento.procedimentoId) {
            throw new Error("selecione pelo menos um procedimento ou um medicamento");
        }

        duracaoEmHoras += procedimento.duracaoEmHoras;
    }

    const atendimento = await db.atendimento.create({
        data: {
            titulo: data.titulo,
            paciente: {
                connect: {
                    id: data.idPaciente
                }
            },
            intervaloEmDia: data.intervaloEmDia,
            duracaoEmHoras: duracaoEmHoras,
            dataInicial: data.dataInicial,
            dataFinal: data.dataFinal,
            procedimentos: {
                createMany: {
                    data: data.procedimentos.map(proced => {
                        return {
                            procedimentoId: proced.procedimentoId,
                            medicamentoId: proced.medicamentoId,
                            quantidade: proced.quantidade,
                            duracaoEmHoras: proced.duracaoEmHoras
                        }
                    })
                }
            }
        }
    });

    let currentDate: Date = atendimento.dataInicial;
    const dataFinal = atendimento.dataFinal;

    if (!currentDate || !dataFinal) {
        throw new Error("Data inicial ou final do acompanhamento está indefinida");
    }

    const visitas: Prisma.VisitaCreateInput[] = [];

    while (currentDate <= dataFinal) {
        await db.visita.create({
            data: {
                atendimento: {
                    connect: {
                        id: atendimento.id
                    }
                },
                paciente: {
                    connect: {
                        id: atendimento.pacienteId
                    }
                },
                dataVisita: currentDate,
                
            }
        })

        console.log(currentDate);

        // Incrementa a data atual pelo intervalo especificado
        currentDate.setDate(currentDate.getDate() + data.intervaloEmDia);
    }   

    redirect(`/hub/atendimentos/${atendimento.id}`);
}
