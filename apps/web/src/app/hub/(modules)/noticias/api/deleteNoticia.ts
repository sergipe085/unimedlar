import { api } from "@/lib/api"
import z from "zod";
import { Noticia } from "./types/noticia";

const reqSchema = z.object({
    id: z.string()
})

type Req = z.infer<typeof reqSchema>;

export async function deleteNoticia(req: Req) {
    const { id } = reqSchema.parse(req);

    await api.delete("/noticias/remover-noticia/"+id)
}