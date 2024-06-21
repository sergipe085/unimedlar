import { useEffect, useState } from "react";
import { Modulo } from "../types/modulo";
import { getModulos } from "../api/get-modulos";
import { Noticia } from "@/data/noticias/types/noticia";
import { getNoticias } from "@/data/noticias/api/get-noticias";

export function useNoticias() {
    const [noticias, setNoticias] = useState<Noticia[]>([]);

    useEffect(() => {
        getNoticias().then(setNoticias);
    }, [])

    return {
        noticias
    }
}