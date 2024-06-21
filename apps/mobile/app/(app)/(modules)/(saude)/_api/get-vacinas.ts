import { api } from "@/lib/api"
import { Vacina } from "../../../../../data/saude/types/vacina"

export async function getVacinas(): Promise<Vacina[]> {
    const response = await api.get(`/saude/vacinas/vacinas-receitadas-cidadao`)
    
    return response.data.data
}