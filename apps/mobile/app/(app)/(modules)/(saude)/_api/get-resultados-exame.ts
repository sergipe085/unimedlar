import { api } from "@/lib/api"
import { Exame } from "../../../../../data/saude/types/exame"
import { ResultadoExame } from "./types/resultadoExame"

export async function getResultadoExame(): Promise<ResultadoExame[]> {
    const response = await api.get(`/saude/exames/exames-resultados-cidadao`)
    
    return response.data.data
}