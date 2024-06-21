import { Request, Response } from 'express';
import { ExpressAppResponse } from '../../../../../utils/express-app-response';
import { PrismaCargosRepository } from '@/modules/auth/repositories/prisma/cargos-repository-prisma';

const positionsRepository = new PrismaCargosRepository();

export async function list_positions_controller(req: Request, res: Response)  {
  const result = await positionsRepository.find();
  return ExpressAppResponse(res).success(result);
};
