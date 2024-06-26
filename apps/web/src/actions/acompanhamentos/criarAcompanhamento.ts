"use server"

import { db } from "../../lib/db";
import { formToJSON } from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
    idPaciente: z.string(),
    dataInicial: z.coerce.date(),
    dataFinal: z.coerce.date(),
})

export async function criarAcompanhamento(formData: FormData) {
    const req = formToJSON(formData);

    const { idPaciente, dataInicial, dataFinal } = schema.parse(req);

    const acompanhamento = await db.acompanhamento.create({
        data: {
            paciente: {
                connect: {
                    id: idPaciente
                }
            },
            dataInicial,
            dataFinal
        }
    })

    redirect(`/hub/acompanhamentos/${acompanhamento.id}`);
}