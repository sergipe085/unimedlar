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
            paciente: {
                connect: {
                    id: data.idPaciente
                }
            },
            intervaloEmDia: data.intervaloEmDia,
            duracaoEmHoras: duracaoEmHoras,
            dataInicial: data.dataInicial,
            dataFinal: data.dataFinal
        }
    });

    let currentDate: Date = atendimento.dataInicial;
    const dataFinal = atendimento.dataFinal;

    if (!currentDate || !dataFinal) {
        throw new Error("Data inicial ou final do acompanhamento está indefinida");
    }

    const visitas: Prisma.VisitaCreateInput[] = [];

    while (currentDate <= dataFinal) {
        visitas.push({
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
            dataVisita: currentDate
        });

        // Incrementa a data atual pelo intervalo especificado
        currentDate.setDate(currentDate.getDate() + data.intervaloEmDia);
    }   

    redirect(`/hub/atendimentos/${atendimento.id}`);
}
