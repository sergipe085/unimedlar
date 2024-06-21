export type Agendamento = {
    no_unidade_origem: string;
    no_unidade_destino: string;
    no_profissional: string;
    codigo_unico_agendamento: string;
    dt_agendamento: string;
    hr_agendamento: string;
    ds_procedimento: string;
    presenca_confirmada_em: string | null,
    confirmado_em: string | null,
}