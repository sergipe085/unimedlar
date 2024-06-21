import { Router } from "express";
import { agendamentosCidadao } from "./controllers/listas-agendamentos-cidadao-controller";
import { confirmarPresencaController } from "./controllers/confirmar-presenca-controller";

export const agendamentos_routes = Router();

// consultas_routes.get("/", listar_casas_na_localizacao_controller);
agendamentos_routes.get("/agendamentos-cidadao", agendamentosCidadao);
agendamentos_routes.put("/confirmar-presenca", confirmarPresencaController);

