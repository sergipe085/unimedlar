import { OuvidoriaRepository } from '../../../repositories/prisma/Ouvidoria-repository';
import { Request, Response } from "express";
import { ExpressAppResponse } from "@/utils/express-app-response";
import { listar_chamados_use_case } from '../../../usecases/chamados/listar-chamados-use-cases';
import { IAuth } from '@/modules/auth/http/middlewares/express-check-auth';
import { listar_chamados_usuario_use_case } from '../../../usecases/chamados/listar-chamados-usuario-use-case';
import { detalhes_chamados_use_case } from '../../../usecases/chamados/detalhes-chamados-use-cases';
import { z } from 'zod';

const ouvidoriaRepository = new OuvidoriaRepository();

export async function detalhes_chamados_controller(req: Request, res: Response) {
    const querySchema = z.object({
        idChamado: z.optional(z.string()),
    });

    const { idChamado } = querySchema.parse(req.params);

   const { chamado } =  await detalhes_chamados_use_case({
        ouvidoriaRepository,
        idChamado
    })

    return ExpressAppResponse(res).success({
        chamado
    })
}