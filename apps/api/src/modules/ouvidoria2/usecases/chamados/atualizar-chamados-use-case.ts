import { Ouvidoria } from "@prisma/client";
import { OuvidoriaRepository } from "../../repositories/prisma/Ouvidoria-repository";
import { TypeOuvidoria } from "../../models/TypeOuvidoria";

interface IRequest {
    bodyChamado: TypeOuvidoria;
    ouvidoriaRepository: OuvidoriaRepository;
    idChamado: string;
}

export async function atualizar_chamados_use_case({ bodyChamado, ouvidoriaRepository, idChamado }:IRequest) {
    return await ouvidoriaRepository.atualizarChamados(idChamado, bodyChamado)
}