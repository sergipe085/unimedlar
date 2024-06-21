import { IAuth } from "@/modules/auth/http/middlewares/express-check-auth";
import { Router } from "express";
import { update_co_cidadao_use_case } from "../use-cases/update-co-cidadao";
import { PecDadosSaudeCidadaoRepository } from "@/modules/saude/submodules/dados-saude-cidadao/repositories/pec/pec-dados-saude-cidadao";
import { ExpressAppResponse } from "@/utils/express-app-response";

export const cadastro_routes = Router()

cadastro_routes.put('/saude', async (req, res) => {
    const { user } = req.body.auth as IAuth;

    const {userSaude}=await update_co_cidadao_use_case({
        pec_repository: new PecDadosSaudeCidadaoRepository(),
        cpf: user.cpf,
        user
    })

    return ExpressAppResponse(res).success({
        userSaude
    })
})