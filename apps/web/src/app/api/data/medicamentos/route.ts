import { signin } from "@/actions/signin";
import { auth } from "@/data/auth";
import { getHistoricoVisitasDoPaciente, getProximaVisitaDoPaciente, getProximasVisitasDoPaciente } from "@/data/visitas";
import { db } from "@/lib/db";
import { loginSchema } from "@/schemas/loginSchema";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const { user } = await auth();

    const medicamentos = await db.medicamento.findMany();

    return new Response(JSON.stringify({
        medicamentos
    }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
}
