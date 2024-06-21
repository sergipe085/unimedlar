import { Ouvidoria } from "@prisma/client";
import { OuvidoriaRepository } from "../../repositories/prisma/Ouvidoria-repository";

interface IRequest {
    idResposta: string;
    ouvidoriaRepository: OuvidoriaRepository;
}

export async function apagar_respostas_use_case({ ouvidoriaRepository, idResposta }: IRequest) {
    return await ouvidoriaRepository.apagar_resposta(idResposta)
}