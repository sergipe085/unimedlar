import { Router } from "express";
import { ExamesCidadao, ExamesResultadosCidadao } from "../http/controllers/listas-exames-cidadao-controller";

export const exames_routes = Router();

// exames_routes.get("/", listar_casas_na_localizacao_controller);
exames_routes.get("/exames-requisitados-cidadao", ExamesCidadao);
exames_routes.get("/exames-resultados-cidadao", ExamesResultadosCidadao);