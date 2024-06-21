import { Router } from "express";
import { ouvidoria_routes } from "../submodules/ouvidoria/http/routes";


export const OuvidoriaRouter = Router();

OuvidoriaRouter.use("/ouvidoria", ouvidoria_routes);
