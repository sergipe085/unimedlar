import { Request, Response } from "express";
import { z } from "zod";
import { modules } from "../../../../../config.json"
import { ExpressAppResponse } from "@/utils/express-app-response";


export async function modulosEspecificos(req: Request, res: Response) {
    const { id } = req.query;
    return ExpressAppResponse(res).success(modules.find(m => m.id == id));
}



