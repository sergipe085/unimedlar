import { Request, Response } from "express";
import { z } from "zod";
import { IAuth } from "@/modules/auth/http/middlewares/express-check-auth";
import { ExpressAppResponse } from "@/utils/express-app-response";
import { OuvidoriaRepository } from "../../../repositories/prisma/Ouvidoria-repository";
import { criar_chamados_use_case } from "../../../usecases/chamados/criar-chamados-use-case";
import prisma from "@/database";
import { criar_respostas_use_case } from "@/modules/ouvidoria2/usecases/respostas/criar-respostas-use-case";
import { TiposResposta } from "@prisma/client";
import { sendPushNotification } from "@/services/expo-notificatios";

const ouvidoriaRepository = new OuvidoriaRepository();

const respostaSchema = z.object({
    tipo_resposta: z.enum([TiposResposta.ATUALIZACAO, TiposResposta.CANCELAMENTO, TiposResposta.CORRECAO]),
    resposta: z.string(),
    imagens: z.array(z.string()).optional(),
    chamadoId: z.string(),
});

export async function criar_respostas_controller(req: Request, res: Response) {
    const { user } = req.body.auth as IAuth;

    try {
        const parsedData = respostaSchema.parse(req.body);

        const bodyResposta = {
            ...parsedData,
            user_id: user.id,
        };

        const resposta = await criar_respostas_use_case({
            ouvidoriaRepository,
            bodyResposta: {
                imagens: parsedData.imagens,
                resposta: parsedData.resposta,
                tipo_resposta: parsedData.tipo_resposta,
                user: {
                    connect: {
                        id: user.id
                    }
                },
                ouvidoria: {
                    connect: {
                        id: parsedData.chamadoId
                    }
                }
            },
            
        });


        // sendPushNotification({
        //     expoPushToken: resposta.user.userNotification.expo_token,
        //     title: "Resposta recebida",
        //     message: "Seu chamado tem uma nova resposta, verifique!"
        // })

        return ExpressAppResponse(res).success({
            resposta: resposta,
            tokenNotific: resposta.ouvidoria.user.userNotification.expo_token
        },
            'Chamado criado com sucesso');
    } catch (e) {
        return ExpressAppResponse(res).error(400, e.message);
    }
}
