import { signin } from "@/actions/signin";
import { auth } from "@/data/auth";
import { getHistoricoVisitasDoPaciente, getProximaVisitaDoPaciente, getProximasVisitasDoPaciente, getVisitasDoDia } from "@/data/visitas";
import { sendPushNotification } from "@/lib/expo-notificatios";
import { loginSchema } from "@/schemas/loginSchema";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const visitasDeAmanha = await getVisitasDoDia(tomorrow);

    for (const visita of visitasDeAmanha) {
        await sendPushNotification({
            expoPushToken: visita.paciente.cuidador?.usuario?.expoNotificationToken ?? "",
            title: "Voce tem uma consulta amanha!",
            message: `Prepare-se para a consulta no turno da ${visita.turno}.`
        })
    }

    return new Response(JSON.stringify({
    }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
}
