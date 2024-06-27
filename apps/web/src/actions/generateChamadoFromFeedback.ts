import { auth } from "@/data/auth";
import { db } from "@/lib/db";
import { classificateMessage } from "@/lib/openai";

export async function generateChamadoFromFeedback(feedback: string) {
    const { user } = await auth();
    const response = await classificateMessage(feedback);

    if (response) {
        return await db.chamado.create({
            data: {
                tipo: response.tipo,
                assunto: response.assunto,
                urgencia: response.prioridade,
                reclamacao: feedback,
                autor: {
                    connect: {
                        id: user.id
                    }
                }
            }
        })
    }

    return null
}