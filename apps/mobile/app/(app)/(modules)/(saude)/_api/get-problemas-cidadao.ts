import { api } from "@/lib/api"
import { Agendamento } from "../../../../../data/saude/types/agendamento"
import { ProblemasCidadao } from "./types/problemasCidadao"

export async function getProblemasCidadao(): Promise<ProblemasCidadao[]> {
    const response = await api.get(`/saude/dadosSaudeCidadao/ListaProblemasCidadao`)
    
    return response.data.data
}