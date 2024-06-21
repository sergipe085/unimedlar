import { Request, Response } from "express";
import { ExpressAppResponse } from "../../../../../utils/express-app-response";
import { PrismaUsuariosRepository } from "@/modules/auth/repositories/prisma/users-repository-prisma";
import { z } from "zod";
import { hashSync } from "bcryptjs";

const users_repository = new PrismaUsuariosRepository();

export async function update_user_controller(req: Request, res: Response) {
    const updateUserSchema = z.object({
        nome: z.string().optional(),
        senha: z.string().optional(),
        cpf: z.string().optional(),
        id_position: z.string(),
        id_pec: z.string().optional(),
        unidade_id: z.string().optional(),
        unidade_cnes: z.string().optional()
    });

    
    const userData = updateUserSchema.parse(req.body);

    if (!userData.senha) {
        delete(userData.senha);
    }
    else {
        const hashedSenha = hashSync(userData.senha, 8);
        userData.senha = hashedSenha;
    }
    const { id } = req.params as any;
    const updatedUser = await users_repository.update(id, userData);
    return ExpressAppResponse(res).success({ status: 'success', data: updatedUser })
}