import { OuvidoriaRepository } from "../../repositories/prisma/Ouvidoria-repository";

export interface IRequest {
    ouvidoriaRepository: OuvidoriaRepository;
}

export async function listar_respostas_use_case({
    ouvidoriaRepository,
}: IRequest) {
    const respostas = await ouvidoriaRepository.listar_respostas();
    return {
        respostas
    }
}