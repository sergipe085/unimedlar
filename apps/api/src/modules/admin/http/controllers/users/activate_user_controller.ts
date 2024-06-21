import { Request, Response } from "express";
import { ExpressAppResponse } from "../../../../../utils/express-app-response";
import { PrismaUsuariosRepository } from "@/modules/auth/repositories/prisma/users-repository-prisma";

const users_repository = new PrismaUsuariosRepository();

export async function activate_user_controller(req: Request, res: Response) {
    const { id } = req.params;
    await users_repository.ativar(id);
    return ExpressAppResponse(res).success();
}