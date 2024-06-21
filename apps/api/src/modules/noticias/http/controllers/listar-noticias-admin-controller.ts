import { Request, Response } from "express";
import { z } from "zod";
import { PecNoticiasRepository } from "../../repositories/pec/pec-noticias-repository";
import { deletar_noticia_use_case } from "../../useCases/deletar-noticia-use-case";
import { listar_noticias_admin_use_case } from "../../useCases/listar-noticias-admin-use-case";
import { ExpressAppResponse } from "@/utils/express-app-response";

const noticias_repository = new PecNoticiasRepository();
export async function listar_noticias_admin_controller(req: Request, res: Response) {
    const querySchema = z.object({
        user_id: z.optional(z.string()),
    });

    const { user_id } = querySchema.parse(req.query);

    const { noticiasAdmin } = await listar_noticias_admin_use_case({
        noticias_repository,
        userId: user_id
    })

    return ExpressAppResponse(res).success({
        noticiasAdmin
    })
}