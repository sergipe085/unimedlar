import { generateChamadoFromFeedback } from "@/actions/generateChamadoFromFeedback";
import { auth } from "@/data/auth";
import { realizarAvaliacao, realizarAvaliacaoFeedback } from "@/data/avaliacao";
import { classificateMessage } from "@/lib/openai";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {

    // Supondo que você receba os dados da visita através do corpo da requisição
    const { feedback, idVisita } = await req.json();

    // if (!idVisita || !feedback) return 
 
    // Exemplo de como salvar a visita
    const visitaSalva = await realizarAvaliacaoFeedback(idVisita, feedback);
    const chamado = await generateChamadoFromFeedback(feedback);
    
    return new Response(JSON.stringify({
        visitaSalva,
        chamado
    }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
}
