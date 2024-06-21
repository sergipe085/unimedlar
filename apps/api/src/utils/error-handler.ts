import { Request, Response, NextFunction } from "express";
import { AppError } from "./app-error";
import { ExpressAppResponse } from "./express-app-response";
import { ZodError } from "zod";
import { Prisma } from "@prisma/client";

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    console.log("Error: " + err.message);
    if (err instanceof(AppError)) {
        const appError = err as AppError;

        return ExpressAppResponse(res).error(appError.status, appError.message); 
    }
    else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        return ExpressAppResponse(res).error(500, err.message); 
    }
    else {
        return ExpressAppResponse(res).error(500, err.message); 
    }
}

export default errorHandler;