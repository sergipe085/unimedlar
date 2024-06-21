import { Noticia } from "../models/noticia";
import { INoticiasRepository } from "../repositories/interface/noticias-repository";

export interface IRequest {
    noticias_repository: INoticiasRepository;
    bodyNoticia: Noticia;
}
export async function criar_noticias_use_case({
    noticias_repository,
    bodyNoticia
}: IRequest) {
    return await noticias_repository.criarNoticia(bodyNoticia);
}