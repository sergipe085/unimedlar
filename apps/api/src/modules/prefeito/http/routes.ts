import { Router } from "express";
import { domicilios_routes } from "../submodules/domicilios/http/routes";

export const prefeito_routes = Router();

prefeito_routes.use("/domicilios", domicilios_routes);
