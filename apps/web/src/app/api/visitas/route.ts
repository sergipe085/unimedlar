import { signin } from "@/actions/signin";
import { auth } from "@/data/auth";
import { getHistoricoVisitasDoPaciente, getProximaVisitaDoPaciente, getProximasVisitasDoPaciente, getVisitasByPaciente } from "@/data/visitas";
import { loginSchema } from "@/schemas/loginSchema";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const { user } = await auth();

    const pacienteId = user.cuidador?.pacientes[0].id ?? "";
    const proximaVisita = await getProximaVisitaDoPaciente(pacienteId)
    const visitas = await getVisitasByPaciente(pacienteId);

    return new Response(JSON.stringify({
        proximaVisita,
        visitas
    }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
}
