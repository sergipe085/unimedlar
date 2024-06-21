
import prisma from "../../../../database";
import { IUsuariosRepository } from "../interfaces/usuarios-repository";
import { Prisma, USER } from "@prisma/client";

export class PrismaUsuariosRepository implements IUsuariosRepository {
    async criar(user: Prisma.USERCreateInput): Promise<USER> {
        const userData = await prisma.uSER.create({
            data: user
        })

        return userData
    }
    updateCargo(id: any, cargo_id: any): unknown {
        throw new Error("Method not implemented.");
    }

    async delete(ID: string): Promise<void> {
        await prisma.uSER.update({
            where: {
                id: ID,
            },
            data: {
                deleted_at: new Date()
            }
        })
    }

    async save(user: Prisma.USERCreateInput): Promise<void> {
        await prisma.uSER.upsert({
            where: {
                id: user.id
            },
            create: user,
            update: user,
        })
    }



    async update(id: string, data: Prisma.USERUpdateInput): Promise<any> {
        const updatedUser = await prisma.uSER.update({
            where: {
                id: id
            },
            data: data
        });
        return updatedUser; // Retorna o usuário atualizado
    }






    async find(filter: any): Promise<USER[]> {
        const users = await prisma.uSER.findMany({
            where: {
                ...filter,
            }
        })
        return users
    }

    async findDesativados(): Promise<USER[]> {
        const users = await prisma.uSER.findMany({
            where: {
                deleted_at: {
                    not: null
                }
            }
        })
        return users
    }

    async findByCpf(cpf: string): Promise<USER | null> {
        const user = await prisma.uSER.findUnique({
            where: {
                cpf
            }
        })

        return user ?? null;
    }

    async findByID(ID: string): Promise<USER> {
        const user = await prisma.uSER.findFirst({
            where: {
                id: ID
            },
            include: {
                userSaude: true,
                userNotification: true
            }
        })

        return user;
    }

    async desativar(id: string): Promise<void> {
        await prisma.uSER.update({
            where: {
                id,
            },
            data: {
                deleted_at: new Date()
            }
        });
    }


    async ativar(id: string): Promise<void> {
        await prisma.uSER.update({
            where: {
                id,
            },
            data: {
                deleted_at: null
            }
        });
    }

}
