import { IAuth } from "@/modules/auth/http/middlewares/express-check-auth";
import { PrismaUsuariosRepository } from "@/modules/auth/repositories/prisma/users-repository-prisma";
import { create_user_use_case } from "@/modules/admin/usecases/create-user-use-case";
import { Request, Response } from "express";
import { z } from "zod";

const users_repository = new PrismaUsuariosRepository();

export async function create_user_controller(req: Request, res: Response) {
    const userSchema = z.object({
        name: z.string(),
        password: z.string(),
        cpf: z.string(),
        id_position: z.string(),
    })
    const { ...props } = userSchema.parse(req.body);
    
    const created_user = await create_user_use_case(users_repository, {
        name: props.name,
        password: props.password,
        cpf: props.cpf,
        id_position: props.id_position,
    })

    return res.json({
        created_user
    })
}