import { Request, Response } from "express";
import { z } from "zod";
import { PecNoticiasRepository } from "../../repositories/pec/pec-noticias-repository";
import { deletar_noticia_use_case } from "../../useCases/deletar-noticia-use-case";
import { ExpressAppResponse } from "@/utils/express-app-response";

const noticias_repository = new PecNoticiasRepository();

export async function deletar_noticia_controller(req: Request, res: Response) {
    const querySchema = z.object({
        id_Noticia: z.optional(z.string()),
    });

    const { id_Noticia } = querySchema.parse(req.params);

    await deletar_noticia_use_case({
        noticias_repository,
        id_noticia: id_Noticia
    })

    return ExpressAppResponse(res).success('Remoção feita')
}