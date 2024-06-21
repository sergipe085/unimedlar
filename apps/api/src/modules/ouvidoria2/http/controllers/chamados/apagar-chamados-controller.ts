import { Request, Response } from "express";
import { z } from "zod";
import { ExpressAppResponse } from "@/utils/express-app-response";
import { OuvidoriaRepository } from "../../../repositories/prisma/Ouvidoria-repository";
import { apagar_chamados_use_case } from "../../../usecases/chamados/apagar-chamados-use-cases";

const ouvidoriaRepository = new OuvidoriaRepository();

export async function apagar_chamado_controller(req: Request, res: Response) {
    const querySchema = z.object({
        idChamado: z.optional(z.string()),
    });

    const { idChamado } = querySchema.parse(req.params);

    await apagar_chamados_use_case({
        ouvidoriaRepository,
        idChamado
    })

    return ExpressAppResponse(res).success('Remoção feita')
}