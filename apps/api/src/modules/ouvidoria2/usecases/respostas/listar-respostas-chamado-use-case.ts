import { OuvidoriaRepository } from "../../repositories/prisma/Ouvidoria-repository";

export interface IRequest {
    ouvidoriaRepository: OuvidoriaRepository;
    idChamado: string;
}

export async function listar_respostas_chamados_use_case({
    ouvidoriaRepository,
    idChamado
}: IRequest) {
    const respostas = await ouvidoriaRepository.listar_respostas_por_chamado(idChamado);
    return {
        respostas
    }
}