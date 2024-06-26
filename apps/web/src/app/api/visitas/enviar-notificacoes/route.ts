import { signin } from "@/actions/signin";
import { auth } from "@/data/auth";
import { getHistoricoVisitasDoPaciente, getProximaVisitaDoPaciente, getProximasVisitasDoPaciente } from "@/data/visitas";
import { loginSchema } from "@/schemas/loginSchema";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    console.log("ENVIAR NOTIFICACOES");
    return new Response(JSON.stringify({
    }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
}
