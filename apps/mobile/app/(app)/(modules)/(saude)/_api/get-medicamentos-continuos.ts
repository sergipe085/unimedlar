import { api } from "@/lib/api"
import { Agendamento } from "../../../../../data/saude/types/agendamento"
import { MedicamentosContinuos } from "./types/medicamentosContinuos"

export async function getMedicamentosContinuosCidadao(): Promise<MedicamentosContinuos[]> {
    const response = await api.get(`/saude/dadosSaudeCidadao/MedicamentoUsoContinuoCidadao`)
    console.log(response)
    return response.data.data
}