import { api } from "@/lib/api"
import { Agendamento } from "../../../../../../data/saude/types/agendamento"

export async function getAgendamentos(): Promise<Agendamento[]> {
    const response = await api.get(`/saude/agendamentos/agendamentos-cidadao`)
    
    return response.data.data
}