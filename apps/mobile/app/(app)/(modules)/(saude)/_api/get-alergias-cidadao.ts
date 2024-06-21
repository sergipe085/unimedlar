import { api } from "@/lib/api"
import { Agendamento } from "../../../../../data/saude/types/agendamento"
import { AlergiasCidadao } from "./types/alergiasCidadao"

export async function getAlergiasCidadao(): Promise<AlergiasCidadao[]> {
    const response = await api.get(`/saude/dadosSaudeCidadao/AlergiasCidadao`)
    
    return response.data.data
}