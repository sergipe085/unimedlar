import { Request, Response } from "express";
import { z } from "zod";
import { PecAgendamentosRepository } from "../../repositories/pec/pec-agendamentos-repository";
import { ExpressAppResponse } from "@/utils/express-app-response";
import { IAuth } from "@/modules/auth/http/middlewares/express-check-auth";
import { agendamentosDoCidadao, confirmarPresencaAgendamento } from "@/services/jphub/jphub";
import { sendPushNotification } from "@/services/expo-notificatios";

export async function confirmarPresencaController(req: Request, res: Response) {
    const { user } = req.body.auth as IAuth;

    const schema = z.object({
        co_unico_agendamento: z.string()
    })
    
    const { co_unico_agendamento } = await schema.parse(req.body);

    await confirmarPresencaAgendamento(co_unico_agendamento);

    sendPushNotification({
        expoPushToken: user.userNotification.expo_token,
        title: "Presença confirmada",
        message: "Sua presença foi confirmada com sucesso!"
    })

    return ExpressAppResponse(res).success()
}