import { Request, Response } from "express";
import { z } from "zod";
import { PecCNSRepository } from "../../submodules/cartao-main/repositories/pec/pec-cns-repository";
import { ExpressAppResponse } from "@/utils/express-app-response";
import { IAuth } from "@/modules/auth/http/middlewares/express-check-auth";

const CNS_repository = new PecCNSRepository();

export async function cnsInfosCidadao(req: Request, res: Response) {
    const { user } = req.body.auth as IAuth

    const CNSCidadao = await CNS_repository.getCNSInfosCidadao(user.cpf);
    return ExpressAppResponse(res).success(CNSCidadao)
}