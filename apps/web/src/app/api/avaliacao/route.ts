import { generateChamadoFromFeedback } from "@/actions/generateChamadoFromFeedback";
import { auth } from "@/data/auth";
import { jaTemAvaliacao, realizarAvaliacao } from "@/data/avaliacao";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {

    // Supondo que você receba os dados da visita através do corpo da requisição
    const { qualidadeAtendimento, idVisita, cumpriuHorario, feedback, compareceu } = await req.json();

    // if (!idVisita || !nota) return 

    const visitaJaFoiAvaliada = await jaTemAvaliacao(idVisita);

    if (visitaJaFoiAvaliada) {
        return new Response(
            JSON.stringify({}),
            {
                status: 400,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
    }

    const notasAvaliacao: Record<string, { nota: number }> = {
        'muito bom': { nota: 5 },
        'bom': { nota: 4 },
        'regular': { nota: 3 },
        'ruim': { nota: 2 },
        'muito ruim': { nota: 1 },
    };
 
    // Exemplo de como salvar a visita
    const visitaSalva = await realizarAvaliacao(idVisita, notasAvaliacao[qualidadeAtendimento].nota, feedback, cumpriuHorario, compareceu);
    let chamado = null;

    if (feedback && feedback.length > 15) {
        chamado = await generateChamadoFromFeedback(feedback);
    }


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
