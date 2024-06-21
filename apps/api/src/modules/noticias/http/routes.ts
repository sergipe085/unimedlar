import { Router } from "express";
import { listar_noticias_controller } from "./controllers/listar-noticias-controller";
import { listar_noticias_admin_controller } from "./controllers/listar-noticias-admin-controller";
import { deletar_noticia_controller } from "./controllers/deletar-noticia-controller";
import { criar_noticia_controller } from "./controllers/criar-noticia-controller";
import { atualizar_noticia_controller } from "./controllers/atualizar-noticias-controller";
import { detalhes_noticia_controller } from "./controllers/detalhes-noticia";

export const noticias_routes = Router();

noticias_routes.get("/listar-noticias", listar_noticias_controller);
noticias_routes.get("/listar-noticias-admin/:user_id", listar_noticias_admin_controller);
noticias_routes.delete("/remover-noticia/:id_Noticia", deletar_noticia_controller);
noticias_routes.post("/criar-noticia", criar_noticia_controller)
noticias_routes.put("/atualizar-noticia/:noticia_id", atualizar_noticia_controller)

export const noticias_routes_public = Router();
noticias_routes_public.get("/detalhes-noticia/:id_Noticia", detalhes_noticia_controller);