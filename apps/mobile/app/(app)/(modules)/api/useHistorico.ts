import { api } from "@/lib/api";
import { useEffect, useState } from "react";
import { Visitas } from "./interface/visitas";


export function useHistorico() {
    const [historico, setHistorico] = useState<Historico[]>()

    useEffect(() => {
        listHistorico().then(setHistorico);

    }, [])

    return {
        historico
    }
}
export async function listHistorico(): Promise<Historico[]> {
    const { data } = await api.get('/historico')
    console.log(data)

    return data.historico
}