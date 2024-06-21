import { Router } from "express";
import { AlergiasCidadao, DadosGeraisSaudeCidadao, ListaProblemasCidadao, MedicamentoUsoContinuoCidadao } from "./controllers/dados-saude-cidadao-controller";

export const DadosSaudeCidadao_routes = Router();

// DadosSaudeCidadao_routes.get("/", listar_casas_na_localizacao_controller);
DadosSaudeCidadao_routes.get("/AlergiasCidadao", AlergiasCidadao);
DadosSaudeCidadao_routes.get("/ListaProblemasCidadao", ListaProblemasCidadao);
DadosSaudeCidadao_routes.get("/MedicamentoUsoContinuoCidadao", MedicamentoUsoContinuoCidadao);
DadosSaudeCidadao_routes.get("/AtualizarDadosSaudeCidadao", DadosGeraisSaudeCidadao);
    