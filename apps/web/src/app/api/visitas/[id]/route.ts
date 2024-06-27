import { auth } from "@/data/auth";
import { getVisitaById } from "@/data/visitas";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { param }: any) {
    const visita = await getVisitaById(param.id);

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
