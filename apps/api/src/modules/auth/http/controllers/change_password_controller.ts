import { z } from "zod";
import { redefinirSenhaUseCase } from "../../usecases/admin/redefinir-senha-use-case";
import { IAuth } from "../middlewares/express-check-auth";
import { PrismaUsuariosRepository } from "../../repositories/prisma/users-repository-prisma";
import { ExpressAppResponse } from "../../../../utils/express-app-response";
import { Request, Response } from "express";

export async function change_password_controller(req: Request, res: Response) {
    const updatePasswordBodySchema = z.object({
        senha_atual: z.string(),
        nova_senha: z.string().min(4),
        confirmar_nova_senha: z.string().min(4),
    });
    const { senha_atual, nova_senha, confirmar_nova_senha } = updatePasswordBodySchema.parse(req.body);

    const { user } = req.body.auth as IAuth;
    const usersRepository = new PrismaUsuariosRepository();

    await redefinirSenhaUseCase(usersRepository, {
        user: user,
        senha_atual: senha_atual,
        nova_senha,
        confirmar_nova_senha
    });

    return ExpressAppResponse(res).success({}, "senha atualizada com sucesso");
};
