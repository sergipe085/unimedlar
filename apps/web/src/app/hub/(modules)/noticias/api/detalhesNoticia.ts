import { api } from "@/lib/api"
import { useEffect, useState } from "react";
import z from "zod";
import { Noticia } from "./types/noticia";

const reqSchema = z.object({
    id: z.string()
})

type Req = z.infer<typeof reqSchema>;

export function useDetalhesNoticia(id: string) {

    const [noticia, setNoticia] = useState<Noticia | null>(null);

    useEffect(() => {
        detalhesNoticias({
            id
        }).then(setNoticia);
    }, [])

    return {
        noticia
    }
}

export async function detalhesNoticias(req: Req): Promise<Noticia> {
    const { id } = reqSchema.parse(req);

    const { data } = await api.get(`/noticias/detalhes-noticia/${id}`)

    return data.data.noticia;
}