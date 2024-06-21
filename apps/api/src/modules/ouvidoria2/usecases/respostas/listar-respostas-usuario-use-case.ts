import { OuvidoriaRepository } from "../../repositories/prisma/Ouvidoria-repository";

export interface IRequest {
    ouvidoriaRepository: OuvidoriaRepository;
    idUser: string;
}

export async function listar_respostas_usuario_use_case({
    ouvidoriaRepository,
    idUser
}: IRequest) {
    const chamados = await ouvidoriaRepository.listar_respostas_por_user(idUser);
    return {
        chamados
    }
}