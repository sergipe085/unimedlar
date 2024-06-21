import prisma from "@/database";
import { Noticia } from "../../models/noticia";
import { INoticiasRepository } from "../interface/noticias-repository";

export class PecNoticiasRepository implements INoticiasRepository {
    async detalhesNoticia(noticiaId: string): Promise<Noticia> {
        const noticiasDoAdmin = await prisma.noticias.findUnique({
            where: {
                id: noticiaId,
            }
        })

        return noticiasDoAdmin;
    }
    async listarNoticiasDoAdmin(userId: string): Promise<Noticia[]> {
        const noticiasDoAdmin = await prisma.noticias.findMany({
            where: {
                id: userId,
            }
        })

        return noticiasDoAdmin;
    }
    async listarNoticias(): Promise<Noticia[]> {
        const noticias = await prisma.noticias.findMany({
            select: {
                id: true,
                titulo: true,
                descricao: true,
                user: {
                    select: {
                        name: true
                    }
                },
                imagens: true
            }
        })
        
        return noticias;
    }
    async criarNoticia(bodyNoticia: Noticia): Promise<Noticia> {
        return await prisma.noticias.create({
            data: {
                titulo: bodyNoticia.titulo,
                descricao: bodyNoticia.descricao,
                created_at: bodyNoticia.created_at,
                updated_at: bodyNoticia.updated_at,
                user: {
                    connect: {
                        id: bodyNoticia.user_id
                    }
                },
                imagens: bodyNoticia.imagens,
            },
        });
    }
    async atualizarNoticia(noticiaId: string, bodyNoticia: Noticia): Promise<void> {
        await prisma.noticias.update({
            where: {
                id: noticiaId,
            },
            data: {
                titulo: bodyNoticia.titulo,
                descricao: bodyNoticia.descricao,
                created_at: bodyNoticia.created_at,
                updated_at: bodyNoticia.updated_at,
                user_id: bodyNoticia.user_id,
                imagens: bodyNoticia.imagens,
            }
        });
    }
    async removerNoticia(noticiaId: string): Promise<void> {
        await prisma.noticias.delete({
            where: {
                id: noticiaId,
            },
        })
    }

}