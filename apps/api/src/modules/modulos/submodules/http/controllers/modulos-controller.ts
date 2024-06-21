import { Request, Response } from "express";
import { z } from "zod";
import { modules } from "../../../../../config.json"
import { ExpressAppResponse } from "@/utils/express-app-response";


export async function modulos(req: Request, res: Response) {
    return ExpressAppResponse(res).success(modules);
}



