import { api } from "@/lib/api"
import { Encaminhamento } from "../../../../../data/saude/types/encaminhamento"

export async function getEncaminhamentos(): Promise<Encaminhamento[]> {
    const response = await api.get(`/saude/encaminhamentos/encaminhamentos-cidadao`)
    
    return response.data.data
}