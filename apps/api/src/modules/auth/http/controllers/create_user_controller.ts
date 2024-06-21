import bcrypt from 'bcryptjs';
import prisma from '../../../../database';
import { Request, Response } from 'express';
import { ExpressAppResponse } from '../../../../utils/express-app-response';

export async function create_user_controller(req: Request, res: Response) {
    try {
        const validCpf = req.body.cpf.replace(".", "").replace(".", "").replace("-", "");

        const userExists = await prisma.uSER.findUnique({
            where: {
                cpf: validCpf
            }
        });

        if (userExists) {
            return ExpressAppResponse(res).error('Usuário já existe');
        }

        const hashedPassword = bcrypt.hashSync(req.body.password, 6);

        const created_user = await prisma.uSER.create({
            data: {
                cpf: validCpf,
                name: req.body.name,
                password: hashedPassword,
            }
        });

        return ExpressAppResponse(res).success(created_user);
    } catch (error) {
        console.error(error);
        return ExpressAppResponse(res).error('Erro ao criar usuário');
    }
}
