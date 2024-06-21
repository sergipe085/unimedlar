import { Router } from "express";
import { consultasCidadao } from "./controllers/listas-consultas-cidadao-controller";

export const consultas_routes = Router();

// consultas_routes.get("/", listar_casas_na_localizacao_controller);
consultas_routes.get("/consultas-cidadao", consultasCidadao);