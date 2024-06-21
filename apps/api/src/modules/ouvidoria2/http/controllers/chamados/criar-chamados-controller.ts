import { Request, Response } from "express";
import { z } from "zod";
import { IAuth } from "@/modules/auth/http/middlewares/express-check-auth";
import { ExpressAppResponse } from "@/utils/express-app-response";
import { OuvidoriaRepository } from "../../../repositories/prisma/Ouvidoria-repository";
import { criar_chamados_use_case } from "../../../usecases/chamados/criar-chamados-use-case";
import prisma from "@/database";

const ouvidoriaRepository = new OuvidoriaRepository();

const ouvidoriaSchema = z.object({
    titulo: z.string(),
    descricao: z.string(),
    imagens: z.array(z.string()).optional(),
    moduloId: z.string(),
    latitude: z.number().optional(),
    longitude: z.number().optional(),
});

export async function criar_chamados_controller(req: Request, res: Response) {
    const { user } = req.body.auth as IAuth;

    try {
        const parsedData = ouvidoriaSchema.parse(req.body);

        const bodyChamado = {
            ...parsedData,
            user_id: user.id,
        };

        const chamado = await criar_chamados_use_case({
            bodyChamado,
            ouvidoriaRepository,
        });

        return ExpressAppResponse(res).success(chamado, 'Chamado criado com sucesso');
    } catch (e) {
        return ExpressAppResponse(res).error(400, e.message);
    }
}
