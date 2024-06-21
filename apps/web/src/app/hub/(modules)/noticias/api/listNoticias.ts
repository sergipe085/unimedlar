import { api } from "@/lib/api"
import { useEffect, useState } from "react";
import z from "zod";
import { Noticia } from "./types/noticia";

const reqSchema = z.object({
    
})

type Req = z.infer<typeof reqSchema>;

export function useNoticias() {
    const [noticias, setNoticias] = useState<Noticia[]>([]);

    useEffect(() => {
        listNoticias({}).then(setNoticias);
    }, [])

    return {
        noticias
    }
}

async function listNoticias(req: Req): Promise<Noticia[]> {
    const body = reqSchema.parse(req);

    const { data } = await api.get("/noticias/listar-noticias", {
        ...body
    })

    return data.data.noticias;
}