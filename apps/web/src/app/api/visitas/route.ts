import { signin } from "@/actions/signin";
import { auth } from "@/data/auth";
import { getHistoricoVisitasDoPaciente, getProximaVisitaDoPaciente, getProximasVisitasDoPaciente, getVisitasByPaciente } from "@/data/visitas";
import { db } from "@/lib/db";
import { loginSchema } from "@/schemas/loginSchema";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const { user } = await auth();

    const paciente = await db.paciente.findFirst({
        where: {
            cuidadorId: user.cuidadorId
        }
    })
    const proximaVisita = await getProximaVisitaDoPaciente(paciente?.id ?? "")
    const visitas = await getVisitasByPaciente(paciente?.id ?? "");

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
