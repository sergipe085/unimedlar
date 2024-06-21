import { Ouvidoria, Prisma, StatusDenuncia } from "@prisma/client";
import { OuvidoriaRepository } from "../../repositories/prisma/Ouvidoria-repository";
import { TypeOuvidoria } from "../../models/TypeOuvidoria";

interface IRequest {
    bodyChamado: TypeOuvidoria;
    ouvidoriaRepository: OuvidoriaRepository;
}

export async function criar_chamados_use_case({ bodyChamado, ouvidoriaRepository }:IRequest) {
    return await ouvidoriaRepository.criarChamados(bodyChamado)
}