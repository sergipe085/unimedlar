import { Ouvidoria } from "@prisma/client";
import { OuvidoriaRepository } from "../../repositories/prisma/Ouvidoria-repository";
import { TypeOuvidoria } from "../../models/TypeOuvidoria";
import { TypeResposta } from "../../models/TypeResposta";

interface IRequest {
    bodyResposta: TypeResposta;
    ouvidoriaRepository: OuvidoriaRepository;
    idResposta: string;
}

export async function atualizar_resposta_use_case({ bodyResposta, ouvidoriaRepository, idResposta }:IRequest) {
    return await ouvidoriaRepository.atualizar_resposta(idResposta, bodyResposta)
}