import { INoticiasRepository } from "../repositories/interface/noticias-repository";

export interface IRequest {
    noticias_repository: INoticiasRepository;
}

export async function listar_noticias_use_case({
    noticias_repository,
}: IRequest) {
    const noticias = await noticias_repository.listarNoticias();
    return {
        noticias
    }
}