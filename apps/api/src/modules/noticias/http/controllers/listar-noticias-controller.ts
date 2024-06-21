import { Request, Response } from "express";
import { PecNoticiasRepository } from "../../repositories/pec/pec-noticias-repository";
import { listar_noticias_use_case } from "../../useCases/listar-noticias-use-case";
import { ExpressAppResponse } from "@/utils/express-app-response";

const noticias_repository = new PecNoticiasRepository();

export async function listar_noticias_controller(req: Request, res: Response) {
    
   const { noticias } =  await listar_noticias_use_case({
        noticias_repository
    })

    return ExpressAppResponse(res).success({
        noticias
    })
}