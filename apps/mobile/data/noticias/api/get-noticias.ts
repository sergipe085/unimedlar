import { api } from "@/lib/api"
import { Noticia } from "../types/noticia"


export async function getNoticias(): Promise<Noticia[]> {
    const response = await api.get(`/noticias/listar-noticias`)

    return response.data.data.noticias
}