import { Request, Response } from "express";
import { z } from "zod";
import { PecConsultasRepository } from "../../repositories/pec/pec-consultas-repository";
import { ExpressAppResponse } from "@/utils/express-app-response";
import { IAuth } from "@/modules/auth/http/middlewares/express-check-auth";

const consultas_repository = new PecConsultasRepository();

export async function consultasCidadao(req: Request, res: Response) {
    const { user } = req.body.auth as IAuth

    const consultasCidadao = await consultas_repository.getconsultasCidadao(user.userSaude.co_cidadao);
    return ExpressAppResponse(res).success(consultasCidadao)
}