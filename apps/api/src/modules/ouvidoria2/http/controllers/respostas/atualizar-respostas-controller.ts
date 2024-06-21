import { Request, Response } from "express";
import { z } from "zod";
import { IAuth } from "@/modules/auth/http/middlewares/express-check-auth";
import { ExpressAppResponse } from "@/utils/express-app-response";
import { OuvidoriaRepository } from "../../../repositories/prisma/Ouvidoria-repository";
import { criar_chamados_use_case } from "../../../usecases/chamados/criar-chamados-use-case";
import prisma from "@/database";
import { atualizar_chamados_use_case } from "../../../usecases/chamados/atualizar-chamados-use-case";
import { TiposResposta } from "@prisma/client";
import { atualizar_resposta_use_case } from "@/modules/ouvidoria2/usecases/respostas/atualizar-respostas-use-case";

const ouvidoriaRepository = new OuvidoriaRepository();

const respostaSchema = z.object({
    tipo_resposta: z.enum([TiposResposta.ATUALIZACAO, TiposResposta.CANCELAMENTO, TiposResposta.CORRECAO]),
    resposta: z.string(),
    imagens: z.array(z.string()).optional(),
    chamadoId: z.string(),
});

const querySchema = z.object({
    idResposta: z.optional(z.string()),
});

export async function atualizar_respostas_controller(req: Request, res: Response) {
    const { user } = req.body.auth as IAuth;
    

    try {
        const parsedData = respostaSchema.parse(req.body);
        const { idResposta } = querySchema.parse(req.params);


        const bodyResposta = {
            ...parsedData,
            user_id: user.id,
        };

        const resposta = await atualizar_resposta_use_case({
            bodyResposta,
            ouvidoriaRepository,
            idResposta
        });

        return ExpressAppResponse(res).success(resposta, 'Resposta atualizada com sucesso');
    } catch (e) {
        return ExpressAppResponse(res).error(400, e.message);
    }
}
