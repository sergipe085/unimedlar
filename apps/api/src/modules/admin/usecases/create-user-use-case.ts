import { IUsuariosRepository } from "../../auth/repositories/interfaces/usuarios-repository";
import bcrypt from 'bcryptjs';
import { AppError } from "../../../utils/app-error";
import { USER } from "@prisma/client";
import prisma from "../../../database";

interface IRequest {
    name: string;
    password: string;
    cpf: string;
    id_position: string;
}

export async function create_user_use_case(usuariosRepository: IUsuariosRepository, { ...data }: IRequest) {

    const existingUser = await usuariosRepository.findByCpf(data.cpf);
    
    if (existingUser) {
        throw new AppError('Usuário já existe.', 400);
    }
    
    const hashedSenha = bcrypt.hashSync(data.password, 8);
    
    const created_user = await prisma.uSER.create({
        data: {
            ...data,
            password: hashedSenha
        }
    })

    return created_user;
}
