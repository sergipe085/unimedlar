import { get_address_based_on_location } from "@/utils/get_address_based_on_location";
import { Request, Response } from "express";
import { z } from "zod";
import { listar_casas_na_rua_usecase } from "../../usecases/listar-casas-na-rua-usecase";
import { PecCasasRepository } from "../../repositories/pec/pec-casas-repository";
import { ExpressAppResponse } from "@/utils/express-app-response";
import { listar_moradores_da_casa_usecase } from "../../usecases/listar-moradores-da-casa-usecase";

const casas_repository = new PecCasasRepository();

export async function listar_moradores_da_casa_controller(req: Request, res: Response) {
    const querySchema = z.object({
        nu_cpf_responsavel: z.optional(z.string()),
        nu_cns_responsavel: z.optional(z.string())
    });

    const { nu_cpf_responsavel, nu_cns_responsavel } = querySchema.parse(req.query);

    const { moradores } = await listar_moradores_da_casa_usecase({
        casas_repository,
        casa: {
            nu_cpf_responsavel,
            nu_cns_responsavel,
            id: null,
            rua: null
        }
    })

    return ExpressAppResponse(res).success({
        moradores
    })
}