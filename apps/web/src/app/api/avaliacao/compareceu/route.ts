import { generateChamadoFromFeedback } from "@/actions/generateChamadoFromFeedback";
import { auth } from "@/data/auth";
import { realizarAvaliacao, realizarAvaliacaoComparecimento, realizarAvaliacaoFeedback } from "@/data/avaliacao";
import { classificateMessage } from "@/lib/openai";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {

    // Supondo que você receba os dados da visita através do corpo da requisição
    const { compareceu, idVisita } = await req.json();

    const visita = await realizarAvaliacaoComparecimento(idVisita, compareceu);
    
    
    return new Response(JSON.stringify({
        visita
    }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
}
