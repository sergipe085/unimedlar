
import { Request, Response } from "express";
import { z } from "zod";
import { PecExamesRepository } from "../../repositories/pec/pec-exames-cidadao";
import { ExpressAppResponse } from "@/utils/express-app-response";
import { IAuth } from "@/modules/auth/http/middlewares/express-check-auth";

const Exames_repository = new PecExamesRepository();

export async function ExamesCidadao(req: Request, res: Response) {
    const { user } = req.body.auth as IAuth

    const examesCidadao = await Exames_repository.getExamesRequisitadosCidadao(user.userSaude.co_cidadao);
    return ExpressAppResponse(res).success(examesCidadao)
}



export async function ExamesResultadosCidadao(req: Request, res: Response) {
    const { user } = req.body.auth as IAuth

    const examesResultadosCidadao = await Exames_repository.getExamesResultadosCidadao(user.userSaude.co_cidadao);
    return ExpressAppResponse(res).success(examesResultadosCidadao)
}