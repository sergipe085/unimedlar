import prisma from "../../../../../../database";
import { Prisma, Ouvidoria, StatusDenuncia } from "@prisma/client";
import { IOuvidoriaRepository } from "../interfaces/ouvidoria-repository";

export class PrismaOuvidoriaRepository implements IOuvidoriaRepository {

    async save(ouvidoria: Prisma.OuvidoriaCreateInput): Promise<void> {
        await prisma.ouvidoria.create({
            data: ouvidoria,
        });
    }

    async update(id: string, data: Prisma.OuvidoriaUpdateInput): Promise<Ouvidoria> {
        const updatedOuvidoria = await prisma.ouvidoria.update({
            where: {
                id: id,
            },
            data: data,
        });
        return updatedOuvidoria;
    }

    async delete(id: string): Promise<void> {
        await prisma.ouvidoria.delete({
            where: {
                id: id,
            },
        });
    }

    async find(filter: Prisma.OuvidoriaWhereInput): Promise<Ouvidoria[]> {
        const ouvidorias = await prisma.ouvidoria.findMany({
            where: filter,
            include: {
                user: true,
                modulo: true,
            }
        });
        return ouvidorias;
    }

    async findByID(id: string): Promise<Ouvidoria | null> {
        const ouvidoria = await prisma.ouvidoria.findUnique({
            where: {
                id: id,
            },
            include: {
                user: true,
                modulo: true,
            }
        });
        return ouvidoria;
    }


    async createOuvidoria(ouvidoriaData: Prisma.OuvidoriaCreateInput): Promise<Ouvidoria> {
        const ouvidoria = await prisma.ouvidoria.create({
            data: {
                titulo: ouvidoriaData.titulo,
                descricao: ouvidoriaData.descricao,
                status: ouvidoriaData.status,
                url_imagem: ouvidoriaData.url_imagem,
                user: ouvidoriaData.user,
                modulo: ouvidoriaData.modulo,
                criado_em: new Date(),
                atualizado_em: new Date(),
            },
        });

        return ouvidoria;
    }

    async listStatusDenuncia(): Promise<string[]> {
        return Object.values(StatusDenuncia);
    }



    // test() {
    //     this.createOuvidoria({
    //         user: {
    //             connect: {
    //                 id
    //             }
    //         },
    //         modulo: {
    //             connect: {
    //                 id
    //             }
    //         }
    //     })
    // }

}
