import { Request, Response } from "express";
import { z } from "zod";
import { PecNoticiasRepository } from "../../repositories/pec/pec-noticias-repository";
import { criar_noticias_use_case } from "../../useCases/criar-noticia-use-case";
import { IAuth } from "@/modules/auth/http/middlewares/express-check-auth";
import { ExpressAppResponse } from "@/utils/express-app-response";

const noticias_repository = new PecNoticiasRepository();

const noticiaSchema = z.object({
    titulo: z.string(),
    descricao: z.string(),
    imagens: z.array(z.string()).optional(),
});

export async function criar_noticia_controller(req: Request, res: Response) {
    const { user } = req.body.auth as IAuth;

    try {
        const parsedData = noticiaSchema.parse(req.body);

        const bodyNoticia = {
            ...parsedData,
            created_at: new Date(),
            updated_at: new Date(),
            user_id: user.id
        };

        const noticia = await criar_noticias_use_case({
            noticias_repository,
            bodyNoticia
        });

        return ExpressAppResponse(res).success(noticia, 'Notícia criada com sucesso');
    } catch (e) {
        return ExpressAppResponse(res).error(400, e.message);
    }
}
