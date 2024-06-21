import { OuvidoriaRepository } from "../../repositories/prisma/Ouvidoria-repository";

export interface IRequest {
    ouvidoriaRepository: OuvidoriaRepository;
    idChamado: string;
}

export async function detalhes_chamados_use_case({
    ouvidoriaRepository,
    idChamado
}: IRequest) {
    const chamado = await ouvidoriaRepository.detalhesOuvidoria(idChamado);
    return {
        chamado
    }
}