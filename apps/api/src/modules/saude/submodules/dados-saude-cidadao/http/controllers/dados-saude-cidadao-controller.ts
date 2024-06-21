import { Request, Response } from "express";
import { z } from "zod";
import { PecDadosSaudeCidadaoRepository } from "../../repositories/pec/pec-dados-saude-cidadao";
import { ExpressAppResponse } from "@/utils/express-app-response";
import { IAuth } from "@/modules/auth/http/middlewares/express-check-auth";

const DadosSaudeCidadao_repository = new PecDadosSaudeCidadaoRepository();

export async function AlergiasCidadao(req: Request, res: Response) {
    const { user } = req.body.auth as IAuth

    const AlergiasCidadao = await DadosSaudeCidadao_repository.getAlergiasCidadao(user.userSaude.co_cidadao);
    return ExpressAppResponse(res).success(AlergiasCidadao)
}

export async function ListaProblemasCidadao(req: Request, res: Response) {
    const { user } = req.body.auth as IAuth

    const ListaProblemasCidadao = await DadosSaudeCidadao_repository.getListaProblemasCidadao(user.userSaude.co_cidadao);
    return ExpressAppResponse(res).success(ListaProblemasCidadao)
}

export async function MedicamentoUsoContinuoCidadao(req: Request, res: Response) {
    const { user } = req.body.auth as IAuth

    const MedicamentoUsoContinuoCidadao = await DadosSaudeCidadao_repository.getMedicamentoUsoContinuoCidadao(user.userSaude.co_cidadao);
    return ExpressAppResponse(res).success(MedicamentoUsoContinuoCidadao)
}

export async function DadosGeraisSaudeCidadao(req: Request, res: Response) {
    const { user } = req.body.auth as IAuth

    const DadosSaudeCidadao = await DadosSaudeCidadao_repository.getDadosGeraisSaudeCidadao(user.userSaude.co_cidadao)
    return ExpressAppResponse(res).success(DadosSaudeCidadao)

}