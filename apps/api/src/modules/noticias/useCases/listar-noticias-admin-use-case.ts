import { INoticiasRepository } from "../repositories/interface/noticias-repository";

export interface IRequest {
    noticias_repository: INoticiasRepository;
    userId: string;
}
export async function listar_noticias_admin_use_case({
    noticias_repository,
    userId
}: IRequest) {
    const noticiasAdmin = await noticias_repository.listarNoticiasDoAdmin(userId);
    return {
        noticiasAdmin
    }
}