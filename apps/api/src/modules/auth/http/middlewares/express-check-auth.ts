import { IUsuariosRepository } from "../../repositories/interfaces/usuarios-repository";
import jwt from "jsonwebtoken"
import { z } from "zod";
import { NextFunction, Request, Response } from "express";
import { ExpressAppResponse } from "../../../../utils/express-app-response";
import { Prisma, USER } from "@prisma/client";

export interface IAuth {
    user: Prisma.USERGetPayload<{
        include: {
            userSaude: true,
            userNotification: true
        }
    }>;
}

export async function expressCheckAuth(req: Request, res: Response, next: NextFunction, 
    usersRepository: IUsuariosRepository) {
    var auth_token = req.headers.authorization;
        
    if (!auth_token) {
        return res.status(401).send({
            error: "token not provided"
        })
    }

    auth_token = auth_token.split(" ")[1];

    if (!auth_token) {
        return res.status(401).send({
            error: "token not provided."
        })
    }

    const tokenSchema = z.object({
        id_user: z.string(),
        no_user: z.string(),
    })
    const userToken = tokenSchema.parse(jwt.decode(auth_token));
    
    const user = await usersRepository.findByID(userToken.id_user);

    if (!user) {
        return res.status(401).send({
            error: "Unauthorized."
        })
    }   

    req.body.auth = {
        user
    } as IAuth;

    next();
}