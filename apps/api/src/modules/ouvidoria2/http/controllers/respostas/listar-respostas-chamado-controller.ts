import { OuvidoriaRepository } from '../../../repositories/prisma/Ouvidoria-repository';
import { Request, Response } from "express";
import { ExpressAppResponse } from "@/utils/express-app-response";
import { listar_chamados_use_case } from '../../../usecases/chamados/listar-chamados-use-cases';
import { IAuth } from '@/modules/auth/http/middlewares/express-check-auth';
import { listar_chamados_usuario_use_case } from '../../../usecases/chamados/listar-chamados-usuario-use-case';
import { z } from 'zod';
import { listar_respostas_chamados_use_case } from '@/modules/ouvidoria2/usecases/respostas/listar-respostas-chamado-use-case';

const ouvidoriaRepository = new OuvidoriaRepository();

export async function listar_respostas_chamado_controller(req: Request, res: Response) {
    const querySchema = z.object({
        idChamado: z.optional(z.string()),
    });

    const { idChamado } = querySchema.parse(req.params);
    
   const { respostas } =  await listar_respostas_chamados_use_case({
        ouvidoriaRepository,
        idChamado
    })

    return ExpressAppResponse(res).success({
        respostas
    })
}