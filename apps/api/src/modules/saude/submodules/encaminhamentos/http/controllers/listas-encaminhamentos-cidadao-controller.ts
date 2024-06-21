import { Request, Response } from "express";
import { z } from "zod";
import { PecEncaminhamentosRepository } from "../../repositories/pec/pec-encaminhamentos-repository";
import { ExpressAppResponse } from "@/utils/express-app-response";
import { IAuth } from "@/modules/auth/http/middlewares/express-check-auth";
import { JpEncaminhamentosRepository } from "../../repositories/jp/jp-encaminhamentos-repository";

const encaminhamentos_repository = new JpEncaminhamentosRepository();

export async function encaminhamentosCidadao(req: Request, res: Response) {
    const { user } = req.body.auth as IAuth

    const encaminhamentosCidadao = await encaminhamentos_repository.getencaminhamentosCidadao(user.userSaude.co_cidadao);
    return ExpressAppResponse(res).success(encaminhamentosCidadao)
}