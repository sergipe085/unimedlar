import { USER } from "@prisma/client";
import jwt from 'jsonwebtoken';
import { IUsuariosRepository } from "../repositories/interfaces/usuarios-repository";
import { compareSync } from "bcryptjs";
import prisma from "@/database";

interface IRequest {
    username: string;
    password: string;
    token_notification?: string;
}

interface IResponse {
    user: USER;
    token: string;
}

export async function login_use_case(
    userRepository: IUsuariosRepository,  
    { username, password, token_notification }: IRequest): Promise<IResponse | null> {
    const user = await userRepository.findByCpf(username);
    
    if (!user) {
        return {} as IResponse;
    }

    if (!compareSync(password, user.password)) {
        return null;
    }

    if (token_notification) {
        await prisma.uSER.update({
            data: {
                userNotification: {
                    create: {
                        expo_token: token_notification
                    }
                },
            },
            where: {
                id: user.id,
            }
        })
    }
    
    const token = jwt.sign(
        { 
            id_user: user.id, 
            no_user: user.name, 
        }, 
        'secret', 
        {
            expiresIn: '1d'
        }
    );

    delete (user.password)
    return {
        user,
        token,
    };
}
