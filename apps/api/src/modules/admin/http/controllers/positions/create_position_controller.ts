import { ExpressAppResponse } from '../../../../../utils/express-app-response';
import { z } from 'zod';
import { SYSTEM_ACTION, SYSTEM_MODULE } from '@prisma/client';
import { Request, Response } from 'express';
import { PrismaCargosRepository } from '@/modules/auth/repositories/prisma/cargos-repository-prisma';

const positionsRepository = new PrismaCargosRepository();

export async function create_position_controller(req: Request, res: Response) {
    const createCargoBodySchema = z.object({
        name: z.string(),
        actions: z.array(z.string()),
        modules: z.array(z.string())
    });

    const { name, actions, modules } = createCargoBodySchema.parse(req.body);

    await positionsRepository.add({
        name,
        actions: actions as SYSTEM_ACTION[],
        modules: modules as SYSTEM_MODULE[] 
        
    });
    return ExpressAppResponse(res).success();
};
