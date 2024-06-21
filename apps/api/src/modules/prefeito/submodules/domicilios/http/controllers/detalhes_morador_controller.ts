import { AppError } from "@/utils/app-error";

import { Request, Response } from "express";
import { z } from "zod";
import { detalhes_morador_usecase } from "../../usecases/detalhes_morador_usecase";
import { PecCasasRepository } from "../../repositories/pec/pec-casas-repository";
import { ExpressAppResponse } from "@/utils/express-app-response";

export async function detalhes_morador_controller(req: Request, res: Response) {
    const schema = z.object({
        co_cidadao: z.string()
    })

    const { co_cidadao } = schema.parse(req.params);

    const { morador } = await detalhes_morador_usecase({
        co_cidadao: Number(co_cidadao),
        casas_repository: new PecCasasRepository()
    });

    return ExpressAppResponse(res).success({
        morador
    })
}