import { Noticia } from "../../models/noticia"

export interface INoticiasRepository {
    listarNoticiasDoAdmin(userId: string): Promise<Noticia[] | null>
    listarNoticias(): Promise<Noticia[] | null>
    criarNoticia(bodyNoticia: Noticia): Promise<Noticia>
    atualizarNoticia(noticiaId: string, bodyNoticia: Noticia): Promise<void>
    removerNoticia(noticiaId: string): Promise<void>
    detalhesNoticia(noticiaId: string): Promise<Noticia>
}