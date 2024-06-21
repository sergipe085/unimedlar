import { Request, Response } from "express";
import { z } from "zod";
import { PecVacinasRepository } from "../../repositories/pec/pec-vacinas-cidadao";
import { ExpressAppResponse } from "@/utils/express-app-response";
import { IAuth } from "@/modules/auth/http/middlewares/express-check-auth";

const vacinas_repository = new PecVacinasRepository();

export async function VacinasCidadao(req: Request, res: Response) {
    const { user } = req.body.auth as IAuth

    const vacinasCidadao = await vacinas_repository.getVacinasCidadao(user.userSaude.co_cidadao);
    return ExpressAppResponse(res).success(vacinasCidadao)
}