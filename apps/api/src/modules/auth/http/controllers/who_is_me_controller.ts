import { Request, Response } from "express";
import { IAuth } from "../middlewares/express-check-auth";

export async function who_is_me_controller(req: Request, res: Response) {
    const { user } = req.body.auth as IAuth;
  
    delete(user.password)
    return res.json({
        user
    })
}