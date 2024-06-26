import { auth } from "@/data/auth";
import { realizarAvaliacao, realizarAvaliacaoFeedback } from "@/data/avaliacao";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {

    // Supondo que você receba os dados da visita através do corpo da requisição
    const { feedback, idVisita } = await req.json();

    if (!idVisita || !feedback) return Error("Campos obrigatorios não enviados")
 
    // Exemplo de como salvar a visita
    const visitaSalva = await realizarAvaliacaoFeedback(idVisita, feedback);

    return new Response(JSON.stringify({
        visitaSalva
    }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
}
