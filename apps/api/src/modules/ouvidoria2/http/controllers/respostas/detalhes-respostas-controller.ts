import { OuvidoriaRepository } from '../../../repositories/prisma/Ouvidoria-repository';
import { Request, Response } from "express";
import { ExpressAppResponse } from "@/utils/express-app-response";
import { listar_chamados_use_case } from '../../../usecases/chamados/listar-chamados-use-cases';
import { IAuth } from '@/modules/auth/http/middlewares/express-check-auth';
import { listar_chamados_usuario_use_case } from '../../../usecases/chamados/listar-chamados-usuario-use-case';
import { detalhes_chamados_use_case } from '../../../usecases/chamados/detalhes-chamados-use-cases';
import { z } from 'zod';
import { detalhes_respostas_use_case } from '@/modules/ouvidoria2/usecases/respostas/detalhes-respostas-use-cases';

const ouvidoriaRepository = new OuvidoriaRepository();

export async function detalhes_respostas_controller(req: Request, res: Response) {
    const querySchema = z.object({
        idResposta: z.optional(z.string()),
    });

    const { idResposta } = querySchema.parse(req.params);

   const { resposta } =  await detalhes_respostas_use_case({
        ouvidoriaRepository,
        idResposta
    })

    return ExpressAppResponse(res).success({
        resposta
    })
}