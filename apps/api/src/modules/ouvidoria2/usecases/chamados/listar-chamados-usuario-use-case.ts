import { OuvidoriaRepository } from "../../repositories/prisma/Ouvidoria-repository";

export interface IRequest {
    ouvidoriaRepository: OuvidoriaRepository;
    idUser: string;
}

export async function listar_chamados_usuario_use_case({
    ouvidoriaRepository,
    idUser
}: IRequest) {
    const chamados = await ouvidoriaRepository.listarChamadosPorUser(idUser);
    return {
        chamados
    }
}