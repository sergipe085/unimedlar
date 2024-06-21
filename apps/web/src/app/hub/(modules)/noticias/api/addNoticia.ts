import { api } from "@/lib/api"
import z from "zod";
import { Noticia } from "./types/noticia";

const reqSchema = z.object({
    titulo: z.string(),
    descricao: z.string(),
    imagens: z.array(z.string()).optional(),
})

type Req = z.infer<typeof reqSchema>;

export async function addNoticia(req: Req): Promise<Noticia> {
    const body = reqSchema.parse(req);

    const { data } =  await api.post("/noticias/criar-noticia", {
        ...body
    })

    return data.data
}