import { Ouvidoria, Prisma, StatusDenuncia } from "@prisma/client";
import { OuvidoriaRepository } from "../../repositories/prisma/Ouvidoria-repository";
import { TypeOuvidoria } from "../../models/TypeOuvidoria";
import { TypeResposta } from "../../models/TypeResposta";

interface IRequest {
    bodyResposta: Prisma.RespostasOuvidoriaCreateInput;
    ouvidoriaRepository: OuvidoriaRepository;
}

export async function criar_respostas_use_case({ bodyResposta, ouvidoriaRepository }:IRequest) {
    return await ouvidoriaRepository.criar_resposta(bodyResposta)
}