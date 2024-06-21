import { Request, Response } from "express";
import { z } from "zod";
import { PecNoticiasRepository } from "../../repositories/pec/pec-noticias-repository";
import { atualizar_noticias_admin_use_case } from "../../useCases/atualizar-noticia-use-case";
import { ExpressAppResponse } from "@/utils/express-app-response";

const noticias_repository = new PecNoticiasRepository();

const noticiaSchema = z.object({
    titulo: z.string().optional(),
    descricao: z.string().optional(),
    user_id: z.string().optional(),
    imagens: z.array(z.string()).optional(), // Assuming images are optional
    created_at: z.string().optional(),
});

export async function atualizar_noticia_controller(req: Request, res: Response) {
    try {
        
        const querySchema = z.object({
            noticia_id: z.optional(z.string()),
        });

        const parsedData = noticiaSchema.parse(req.body);
        const { noticia_id } = querySchema.parse(req.params);

        const bodyNoticia = {
            ...parsedData,
            updated_at: new Date(),
        };

        await atualizar_noticias_admin_use_case({
            noticias_repository,
            bodyNoticia,
            id_Noticia: noticia_id
        });

        return ExpressAppResponse(res).success('Notícia atualizada com sucesso');
    } catch (e) {
        return ExpressAppResponse(res).error('Erro ao atualizar notícia', e);
    }
}
