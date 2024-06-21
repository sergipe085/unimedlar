import { Request, Response } from "express";
import { z } from "zod";
import { ExpressAppResponse } from "@/utils/express-app-response";
import { OuvidoriaRepository } from "../../../repositories/prisma/Ouvidoria-repository";
import { apagar_chamados_use_case } from "../../../usecases/chamados/apagar-chamados-use-cases";
import { apagar_respostas_use_case } from "@/modules/ouvidoria2/usecases/respostas/apagar-respostas-use-cases";

const ouvidoriaRepository = new OuvidoriaRepository();

export async function apagar_resposta_controller(req: Request, res: Response) {
    const querySchema = z.object({
        idResposta: z.optional(z.string()),
    });

    const { idResposta } = querySchema.parse(req.params);

    await apagar_respostas_use_case({
        ouvidoriaRepository,
        idResposta
    })

    return ExpressAppResponse(res).success('Remoção feita')
}