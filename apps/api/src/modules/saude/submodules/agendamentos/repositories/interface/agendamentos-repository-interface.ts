
import { Agendamentos } from "../../models/agendamentos";

export interface IAgendamentosRepository {
    getagendamentosCidadao(nu_cpf: string, st_agendado: number): Promise<any>;
}