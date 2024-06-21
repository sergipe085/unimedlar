import { INoticiasRepository } from "../repositories/interface/noticias-repository";

export interface IRequest {
    noticias_repository: INoticiasRepository;
    id_noticia: string;
}
export async function detalhes_noticia_use_case({
    noticias_repository,
    id_noticia
}: IRequest) {
     const noticia = await noticias_repository.detalhesNoticia(id_noticia)
     return {
         noticia
     }
}