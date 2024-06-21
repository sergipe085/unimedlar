import { OuvidoriaRepository } from "../../repositories/prisma/Ouvidoria-repository";

export interface IRequest {
    ouvidoriaRepository: OuvidoriaRepository;
}

export async function listar_chamados_use_case({
    ouvidoriaRepository,
}: IRequest) {
    const chamados = await ouvidoriaRepository.listarChamados();
    return {
        chamados
    }
}