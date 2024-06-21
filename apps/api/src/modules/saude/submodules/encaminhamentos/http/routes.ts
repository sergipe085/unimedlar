import { Router } from "express";
import { encaminhamentosCidadao } from "../http/controllers/listas-encaminhamentos-cidadao-controller";

export const encaminhamentos_routes = Router();

// encaminhamentos_routes.get("/", listar_casas_na_localizacao_controller);
encaminhamentos_routes.get("/encaminhamentos-cidadao", encaminhamentosCidadao);