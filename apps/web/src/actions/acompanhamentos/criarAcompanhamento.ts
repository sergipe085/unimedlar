"use server"

import { db } from "@/schemas/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function criarAcompanhamento(formData: FormData) {
    console.log(formData);
    
    const acompanhamento = await db.acompanhamento.create({
        data: {
            paciente: {
                connect: {
                    id: "clxtulmmv00021rqeuotl5blu"
                }
            },
            dataInicial: new Date(),
            dataFinal: new Date(),
            atendimentos: {
                createMany: {
                    data: [

                    ]
                }
            }
        }
    })

    redirect(`/hub/acompanhamentos/${acompanhamento.id}`);
}