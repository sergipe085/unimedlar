import { INoticiasRepository } from "../repositories/interface/noticias-repository";

export interface IRequest {
    noticias_repository: INoticiasRepository;
    id_noticia: string;
}
export async function deletar_noticia_use_case({
    noticias_repository,
    id_noticia
}: IRequest) {
     await noticias_repository.removerNoticia(id_noticia)
}