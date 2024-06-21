import { Router } from "express";
import { cnsInfosCidadao } from "../../../http/controllers/listas-infos-cns-cidadao";

export const InfosCNS_routes = Router();

// consultas_routes.get("/", listar_casas_na_localizacao_controller);
InfosCNS_routes.get("/cns-infos-cidadao", cnsInfosCidadao);

