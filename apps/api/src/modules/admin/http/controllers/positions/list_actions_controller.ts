import { ExpressAppResponse } from '@/utils/express-app-response';
import { SYSTEM_ACTION } from '@prisma/client';
import { Request, Response } from 'express';

export async function list_actions_controller(req: Request, res: Response) {
  const acoes = Object.values(SYSTEM_ACTION);
  return ExpressAppResponse(res).success(acoes);
};
