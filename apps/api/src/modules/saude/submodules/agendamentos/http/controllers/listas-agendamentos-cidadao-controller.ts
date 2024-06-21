import { Request, Response } from "express";
import { z } from "zod";
import { PecAgendamentosRepository } from "../../repositories/pec/pec-agendamentos-repository";
import { ExpressAppResponse } from "@/utils/express-app-response";
import { IAuth } from "@/modules/auth/http/middlewares/express-check-auth";
import { agendamentosDoCidadao } from "@/services/jphub/jphub";

export async function agendamentosCidadao(req: Request, res: Response) {
    const { user } = req.body.auth as IAuth;

    console.log(user);

    const agendamentosCidadao = await agendamentosDoCidadao(user.userSaude.co_cidadao);
    return ExpressAppResponse(res).success(agendamentosCidadao)
}