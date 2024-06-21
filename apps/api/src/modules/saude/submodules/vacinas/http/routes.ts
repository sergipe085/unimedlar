import { Router } from "express";
import { VacinasCidadao } from "../http/controllers/resumo-vacinas-cidadao-controller";

export const vacinas_routes = Router();

// vacinas_routes.get("/", listar_casas_na_localizacao_controller);
vacinas_routes.get("/vacinas-receitadas-cidadao", VacinasCidadao);