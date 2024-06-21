import { get_address_based_on_location } from "@/utils/get_address_based_on_location";
import { Request, Response } from "express";
import { z } from "zod";
import { listar_casas_na_rua_usecase } from "../../usecases/listar-casas-na-rua-usecase";
import { PecCasasRepository } from "../../repositories/pec/pec-casas-repository";
import { ExpressAppResponse } from "@/utils/express-app-response";

const casas_repository = new PecCasasRepository();

export async function listar_casas_na_localizacao_controller(req: Request, res: Response) {
    const querySchema = z.object(
        {
            location: z.optional(
                z.object({
                    lat: z.string(),
                    lon: z.string()
                })
            ),
            rua: z.optional(z.string())
        }
    );

    var { location, rua } = querySchema.parse(req.body);
    if (location) {
        const { rua: r } = await get_address_based_on_location({
            lon: Number(location.lon),
            lat: Number(location.lat)
        });
        rua = r;
    }

    console.log(rua);

    const { casas } = await listar_casas_na_rua_usecase({
        casas_repository,
        rua
    })

    return ExpressAppResponse(res).success({
        casas
    })
}