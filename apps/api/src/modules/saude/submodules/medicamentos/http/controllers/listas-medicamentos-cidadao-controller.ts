
import { Request, Response } from "express";
import { z } from "zod";
import { PecMedicamentosRepository } from "../../repositories/pec/pec-medicamentos-cidadao";
import { ExpressAppResponse } from "@/utils/express-app-response";
import { IAuth } from "@/modules/auth/http/middlewares/express-check-auth";

const medicamentos_repository = new PecMedicamentosRepository();

export async function MedicamentosCidadao(req: Request, res: Response) {
    const { user } = req.body.auth as IAuth
 
    const medicamentosCidadao = await medicamentos_repository.getMedicamentosReceitadosCidadao(user.userSaude.co_cidadao);
    return ExpressAppResponse(res).success(medicamentosCidadao)
}