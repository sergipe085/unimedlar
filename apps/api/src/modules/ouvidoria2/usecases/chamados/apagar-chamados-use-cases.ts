import { Ouvidoria } from "@prisma/client";
import { OuvidoriaRepository } from "../../repositories/prisma/Ouvidoria-repository";

interface IRequest {
    idChamado: string;
    ouvidoriaRepository: OuvidoriaRepository;
}

export async function apagar_chamados_use_case({ ouvidoriaRepository, idChamado }: IRequest) {
    return await ouvidoriaRepository.apagarChamados(idChamado)
}