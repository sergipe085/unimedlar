import { auth } from "@/data/auth";
import { getHistoricoVisitasDoPaciente } from "@/data/visitas";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const { user } = await auth();

    const pacienteId = user.cuidador?.pacientes[0].id ?? "";
    const historico = await getHistoricoVisitasDoPaciente(pacienteId);

    return new Response(JSON.stringify({
       historico
    }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
}