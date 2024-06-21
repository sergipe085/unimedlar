import { Router } from "express";
import { cnsInfosCidadao } from "../http/controllers/listas-infos-cns-cidadao";


export const CNS_routes = Router();

CNS_routes.get("/CNS", cnsInfosCidadao);
