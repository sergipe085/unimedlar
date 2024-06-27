import { auth } from "@/data/auth";
import { getVisitaById } from "@/data/visitas";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
    const visita = await getVisitaById(params.id);

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
