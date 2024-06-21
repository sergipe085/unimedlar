import { Request, Response } from "express";
import { z } from "zod";
import { PrismaOuvidoriaRepository } from "../../repositories/prisma/ouvidoria-repository-prisma";
import { criarOuvidoriaUseCase, deletarOuvidoriaUseCase, atualizarStatusOuvidoriaUseCase } from "../../usecases/criar-ouvidoria-use-case";
import { IAuth } from "@/modules/auth/http/middlewares/express-check-auth";
import { ExpressAppResponse } from "@/utils/express-app-response";

const ouvidoriaRepository = new PrismaOuvidoriaRepository();

export async function criarOuvidoria(req: Request, res: Response) {
    const { user } = req.body.auth as IAuth;
    const userId = user.id;

    const criarOuvidoriaSchema = z.object({
        titulo: z.string(),
        descricao: z.string(),
        moduloId: z.string(),
        url_imagem: z.string().optional(),
    });

    try {
        const parsedData = criarOuvidoriaSchema.parse(req.body);

        const novaOuvidoria = await criarOuvidoriaUseCase(ouvidoriaRepository, {
            userId,
            titulo: parsedData.titulo,
            descricao: parsedData.descricao,
            moduloId: parsedData.moduloId,
            urlImagem: parsedData.url_imagem
        });

        return ExpressAppResponse(res).success(novaOuvidoria);
    } catch (error) {
        return ExpressAppResponse(res).error(error.message, error.statusCode || 400);
    }
}


export async function deletarOuvidoria(req: Request, res: Response) {

    try {
      const ouvidoriaId = req.params.ouvidoriaId;
      await deletarOuvidoriaUseCase(ouvidoriaRepository, { ouvidoriaId });
      return ExpressAppResponse(res).success("Ouvidoria deletada com sucesso.");
    } catch (error) {
      return ExpressAppResponse(res).error(error.message, error.statusCode || 400);
    }

}



export async function atualizarStatusOuvidoria(req: Request, res: Response) {

    try {
      const ouvidoriaId = req.params.ouvidoriaId;
      const { novoStatus } = req.body;  
  
      const ouvidoriaAtualizada = await atualizarStatusOuvidoriaUseCase(ouvidoriaRepository, { ouvidoriaId, novoStatus });
      return ExpressAppResponse(res).success(ouvidoriaAtualizada);
    } catch (error) {
      return ExpressAppResponse(res).error(error.message, error.statusCode || 400);
    }
  }


  export async function listStatusDenuncia(req: Request, res: Response) {
    try {
        const statuses = await ouvidoriaRepository.listStatusDenuncia();
        return ExpressAppResponse(res).success(statuses);
    } catch (error) {
        return ExpressAppResponse(res).error("Não foi possível listar os status das denúncias" && 500);
    }
}

