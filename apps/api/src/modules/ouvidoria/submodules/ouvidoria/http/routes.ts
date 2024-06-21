import { Router } from "express";
import { atualizarStatusOuvidoria, criarOuvidoria, deletarOuvidoria, listStatusDenuncia } from "./controllers/ouvidoria-controller";

export const ouvidoria_routes = Router();

ouvidoria_routes.post("/criar-ouvidoria", criarOuvidoria);
ouvidoria_routes.delete("/deletar-ouvidoria", deletarOuvidoria);
ouvidoria_routes.post("/atualizar-ouvidoria", atualizarStatusOuvidoria);
ouvidoria_routes.get("/listar-status-denuncias", listStatusDenuncia)

