import { api } from "@/lib/api"
import { Agendamento } from "../../../../../../data/saude/types/agendamento"

type Request = {
    co_unico_agendamento: string;
}

export async function confirmarPresenca({ co_unico_agendamento }: Request): Promise<void> {
    await api.put(`/saude/agendamentos/confirmar-presenca`, {
        co_unico_agendamento
    })
}