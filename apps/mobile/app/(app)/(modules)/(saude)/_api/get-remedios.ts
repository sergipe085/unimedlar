import { api } from "@/lib/api"
import { Remedio } from "../../../../../data/saude/types/remedio"

export async function getRemedios(cpf: string): Promise<Remedio[]> {
    const response = await api.get(`/saude/medicamentos/medicamentos-receitados-cidadao?${cpf}`)
    
    return response.data.data
}