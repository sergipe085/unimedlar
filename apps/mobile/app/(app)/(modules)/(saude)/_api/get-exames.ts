import { api } from "@/lib/api"
import { Exame } from "../../../../../data/saude/types/exame"

export async function getExames(): Promise<Exame[]> {
    const response = await api.get(`/saude/exames/exames-requisitados-cidadao`)
    
    return response.data.data
}