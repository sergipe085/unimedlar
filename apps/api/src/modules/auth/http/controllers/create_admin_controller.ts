import bcrypt from 'bcryptjs';
import { Prisma } from '@prisma/client';
import prisma from '../../../../database';
import { Request, Response } from 'express';
import { ExpressAppResponse } from '../../../../utils/express-app-response';

export async function create_admin_controller(req: Request, res: Response) {
    const senha = "tonhao";
    const hashedSenha = bcrypt.hashSync(senha, 8);

    var rootExists = await prisma.pOSITION.findFirst({
        where: {
            is_root: true
        }
    });

    if (!rootExists) {
        rootExists = await prisma.pOSITION.create({
            data: {
                name: "root",
                is_root: true
            }
        });
    }

    const newUser: Prisma.USERCreateInput = {
        name: "ADMINISTRADOR",
        password: hashedSenha,
        cpf: "123.456.789-10",
        position: {
            connect: {
                id: rootExists.id
            }
        }
    };

    const created_user = await prisma.uSER.create({
        data: newUser
    });

    return ExpressAppResponse(res).success(created_user);
};
