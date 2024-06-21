import { Router } from "express";
import { listar_casas_na_localizacao_controller } from "./controllers/listar-casas-na-localizacao-controller";
import { listar_moradores_da_casa_controller } from "./controllers/listar-moradores-da-casa-controller";
import { detalhes_morador_controller } from "./controllers/detalhes_morador_controller";

export const domicilios_routes = Router();

domicilios_routes.post("/", listar_casas_na_localizacao_controller);
domicilios_routes.get("/moradores", listar_moradores_da_casa_controller);
domicilios_routes.get("/moradores/:co_cidadao", detalhes_morador_controller);