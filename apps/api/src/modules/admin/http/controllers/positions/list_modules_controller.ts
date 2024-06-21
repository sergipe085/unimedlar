import { ExpressAppResponse } from '../../../../../utils/express-app-response';
import { SYSTEM_MODULE } from '@prisma/client';
import { Request, Response } from 'express';

export async function list_modules_controller(req: Request, res: Response) {
  const modulos = Object.values(SYSTEM_MODULE);
  return ExpressAppResponse(res).success(modulos);
};
