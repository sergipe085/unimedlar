import { Router } from "express";
import { listar_chamados_controller } from "./controllers/chamados/listar-chamados-controller";
import { detalhes_chamados_controller } from "./controllers/chamados/detalhes-chamados-controller";
import { listar_chamados_usuario_controller } from "./controllers/chamados/listar-chamados-usuario-controller";
import { apagar_chamado_controller } from "./controllers/chamados/apagar-chamados-controller";
import { criar_chamados_controller } from "./controllers/chamados/criar-chamados-controller";
import { atualizar_chamados_controller } from "./controllers/chamados/atualizar-chamados-controller";
import { listar_respostas_controller } from "./controllers/respostas/listar-respostas-controller";
import { detalhes_respostas_controller } from "./controllers/respostas/detalhes-respostas-controller";
import { listar_respostas_usuario_controller } from "./controllers/respostas/listar-respostas-usuario-controller";
import { apagar_resposta_controller } from "./controllers/respostas/apagar-respostas-controller";
import { criar_respostas_controller } from "./controllers/respostas/criar-respostas-controller";
import { atualizar_respostas_controller } from "./controllers/respostas/atualizar-respostas-controller";
import { listar_respostas_chamado_controller } from "./controllers/respostas/listar-respostas-chamado-controller";


export const ouvidoriaRoutes = Router();

//chamados
ouvidoriaRoutes.get("/listar-chamados", listar_chamados_controller);
ouvidoriaRoutes.get("/detalhes-chamado/:idChamado", detalhes_chamados_controller);
ouvidoriaRoutes.get("/listar-chamados-user", listar_chamados_usuario_controller);
ouvidoriaRoutes.delete("/apagar-chamado/:idChamado", apagar_chamado_controller);
ouvidoriaRoutes.post("/criar-chamados", criar_chamados_controller)
ouvidoriaRoutes.put("/atualizar-chamados/:idChamado", atualizar_chamados_controller)

//respostas
ouvidoriaRoutes.get("/listar-respostas", listar_respostas_controller);
ouvidoriaRoutes.get("/detalhes-resposta/:idResposta", detalhes_respostas_controller);
ouvidoriaRoutes.get("/listar-respostas-user", listar_respostas_usuario_controller);
ouvidoriaRoutes.delete("/apagar-resposta/:idResposta", apagar_resposta_controller);
ouvidoriaRoutes.post("/criar-respostas", criar_respostas_controller)
ouvidoriaRoutes.put("/atualizar-respostas/:idResposta", atualizar_respostas_controller)
ouvidoriaRoutes.get("/listar-respostas-chamado/:idChamado", listar_respostas_chamado_controller)