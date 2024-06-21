import { Router } from "express";
import { MedicamentosCidadao } from "../http/controllers/listas-medicamentos-cidadao-controller";

export const medicamentos_routes = Router();

// medicamentos_routes.get("/", listar_casas_na_localizacao_controller);
medicamentos_routes.get("/medicamentos-receitados-cidadao", MedicamentosCidadao);