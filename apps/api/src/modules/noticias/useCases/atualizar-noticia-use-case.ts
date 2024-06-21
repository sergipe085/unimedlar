import { Noticia } from "../models/noticia";
import { INoticiasRepository } from "../repositories/interface/noticias-repository";

export interface IRequest {
    noticias_repository: INoticiasRepository;
    bodyNoticia: Noticia;
    id_Noticia: string;
}
export async function atualizar_noticias_admin_use_case({
    noticias_repository,
    bodyNoticia,
    id_Noticia
}: IRequest) {
    await noticias_repository.atualizarNoticia(id_Noticia, bodyNoticia);
}