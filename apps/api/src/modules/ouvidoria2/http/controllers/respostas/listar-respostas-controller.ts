import { OuvidoriaRepository } from '../../../repositories/prisma/Ouvidoria-repository';
import { Request, Response } from "express";
import { ExpressAppResponse } from "@/utils/express-app-response";
import { listar_chamados_use_case } from '../../../usecases/chamados/listar-chamados-use-cases';
import { listar_respostas_use_case } from '@/modules/ouvidoria2/usecases/respostas/listar-respostas-use-cases';

const ouvidoriaRepository = new OuvidoriaRepository();

export async function listar_respostas_controller(req: Request, res: Response) {
    
   const { respostas } =  await listar_respostas_use_case({
        ouvidoriaRepository
    })

    return ExpressAppResponse(res).success({
        respostas
    })
}