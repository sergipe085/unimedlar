import { auth } from "@/data/auth";
import { realizarAvaliacao } from "@/data/avaliacao";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {

    // Supondo que você receba os dados da visita através do corpo da requisição
    const { nota, idVisita } = await req.json();

    if (!idVisita || !nota) return Error("Campos obrigatorios não enviados")

    const notasAvaliacao: Record<string, { nota: number }> = {
        'muito bom': { nota: 5 },
        'bom': { nota: 4 },
        'regular': { nota: 3 },
        'ruim': { nota: 2 },
        'muito ruim': { nota: 1 },
    };
 
    // Exemplo de como salvar a visita
    const visitaSalva = await realizarAvaliacao(idVisita, notasAvaliacao[nota].nota);

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
