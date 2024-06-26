"use server"

import { AdicionarAtendimentoDTO, adicionarAtendimentoSchema } from "@/schemas/acompanhamento";
import { db } from "../../lib/db";
import { Prisma, TiposProfissionais } from "@prisma/client";
import { formToJSON } from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

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
            acompanhamento: {
                connect: {
                    id: data.idAcompanhamento
                }
            },
            intervaloEmDia: data.intervaloEmDia,
            duracaoEmHoras: duracaoEmHoras,
        },
        include: {
            acompanhamento: true
        }
    });

    if (!atendimento.acompanhamento) {
        throw new Error("acompanhamento invalido");
    }

    let currentDate: Date = atendimento.acompanhamento.dataInicial;
    const dataFinal = atendimento.acompanhamento.dataFinal;

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
            dataVisita: currentDate
        });

        // Incrementa a data atual pelo intervalo especificado
        currentDate.setDate(currentDate.getDate() + data.intervaloEmDia);
    }

    redirect(`/hub/acompanhamentos/${atendimento.acompanhamento.id}`);
}
