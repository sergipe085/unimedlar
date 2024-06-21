import { api } from "@/lib/api"
import { Consulta } from "../../../../../data/saude/types/consulta"

export async function getConsultas(): Promise<Consulta[]> {
    const response = await api.get(`/saude/consultas/consultas-cidadao`)
    
    return response.data.data
}