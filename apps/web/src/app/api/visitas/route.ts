import { signin } from "@/actions/signin";
import { auth } from "@/data/auth";
import { getProximaVisitaDoPaciente, getProximasVisitasDoPaciente } from "@/data/visitas";
import { loginSchema } from "@/schemas/loginSchema";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const { user } = await auth();

    const pacienteId = user.cuidador?.pacientes[0].id ?? "";
    const proximaVisita = await getProximaVisitaDoPaciente(pacienteId)
    const proximasVisitas = await getProximasVisitasDoPaciente(pacienteId);

    return new Response(JSON.stringify({
        proximaVisita,
        proximasVisitas
    }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
}