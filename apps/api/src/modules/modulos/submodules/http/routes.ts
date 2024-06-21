import { Router } from "express";
import { modulos } from "./controllers/modulos-controller";
import { modulosEspecificos } from "./controllers/modulos-especificos-controller";

export const modulos_routes = Router();

modulos_routes.get("/modulos", modulos);
modulos_routes.get("/modulos-espedificos", modulosEspecificos);

