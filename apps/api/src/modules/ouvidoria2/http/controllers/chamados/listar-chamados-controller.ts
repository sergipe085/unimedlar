import { OuvidoriaRepository } from '../../../repositories/prisma/Ouvidoria-repository';
import { Request, Response } from "express";
import { ExpressAppResponse } from "@/utils/express-app-response";
import { listar_chamados_use_case } from '../../../usecases/chamados/listar-chamados-use-cases';

const ouvidoriaRepository = new OuvidoriaRepository();

export async function listar_chamados_controller(req: Request, res: Response) {
    
   const { chamados } =  await listar_chamados_use_case({
        ouvidoriaRepository
    })

    return ExpressAppResponse(res).success({
        chamados
    })
}