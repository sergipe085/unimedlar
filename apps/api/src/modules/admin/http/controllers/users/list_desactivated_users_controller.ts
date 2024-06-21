import { Request, Response } from "express";
import { ExpressAppResponse } from "../../../../../utils/express-app-response";
import { PrismaUsuariosRepository } from "@/modules/auth/repositories/prisma/users-repository-prisma";

const users_repository = new PrismaUsuariosRepository();

export async function list_desactivated_users_controller(req: Request, res: Response) {
    const filter = {
        deleted_at: {
            not: null
        }
    };
    const users = await users_repository.find(filter);
    return ExpressAppResponse(res).success(users.map(u => {
        delete(u.password);
        return u;
    }))
}