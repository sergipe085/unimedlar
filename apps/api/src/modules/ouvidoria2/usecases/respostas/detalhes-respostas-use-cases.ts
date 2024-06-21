import { OuvidoriaRepository } from "../../repositories/prisma/Ouvidoria-repository";

export interface IRequest {
    ouvidoriaRepository: OuvidoriaRepository;
    idResposta: string;
}

export async function detalhes_respostas_use_case({
    ouvidoriaRepository,
    idResposta
}: IRequest) {
    const resposta = await ouvidoriaRepository.detalhes_resposta(idResposta);
    return {
        resposta
    }
}