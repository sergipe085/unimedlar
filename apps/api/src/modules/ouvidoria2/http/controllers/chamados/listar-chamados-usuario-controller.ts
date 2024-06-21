import { OuvidoriaRepository } from '../../../repositories/prisma/Ouvidoria-repository';
import { Request, Response } from "express";
import { ExpressAppResponse } from "@/utils/express-app-response";
import { listar_chamados_use_case } from '../../../usecases/chamados/listar-chamados-use-cases';
import { IAuth } from '@/modules/auth/http/middlewares/express-check-auth';
import { listar_chamados_usuario_use_case } from '../../../usecases/chamados/listar-chamados-usuario-use-case';

const ouvidoriaRepository = new OuvidoriaRepository();

export async function listar_chamados_usuario_controller(req: Request, res: Response) {
    const { user } = req.body.auth as IAuth;
    const idUser = user.id;
    
   const { chamados } =  await listar_chamados_usuario_use_case({
        ouvidoriaRepository,
        idUser
    })

    return ExpressAppResponse(res).success({
        chamados
    })
}