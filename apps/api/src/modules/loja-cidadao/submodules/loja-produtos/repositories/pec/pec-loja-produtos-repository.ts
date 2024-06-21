// import { pec_client } from "../../../../../../services/pec";
// import { IAgendamentosRepository } from "../interface/agendamentos-repository-interface";

// export class PecAgendamentosRepository implements IAgendamentosRepository {

//     async getagendamentosCidadao(nu_cpf: string): Promise<any> {
//         const { rows } = await pec_client.query(`
//         select 
//             tc.no_cidadao,
//             tc.nu_cpf,
//             ta.dt_agendado as data_agendamento,
//             ta.dt_agendado as hora_agendamento,
//             ta.ds_observacao as obs_agendamento,
//             ta.st_agendado as status_agendamento,
//             cbo.no_cbo as cargo_profissional,
//             prof.no_profissional as nome_profissional,
//             tus.no_unidade_saude as nome_unidade_saude
//         from
//             tb_agendado ta
//         left join tb_prontuario tp on tp.co_seq_prontuario = ta.co_prontuario 
//         left join tb_cidadao tc on tc.co_seq_cidadao = tp.co_cidadao 
//         left join tb_lotacao tl on ta.co_lotacao_agendada = tl.co_ator_papel
//         left join tb_cbo cbo on cbo.co_cbo = tl.co_cbo
//         left join tb_prof prof on prof.co_seq_prof = tl.co_prof 
//         left join tb_unidade_saude tus on tus.co_seq_unidade_saude = tl.co_unidade_saude
//         where tc.nu_cpf = $1 or $1 is null;
//         `, [nu_cpf]);

//         return rows;
//     }
// }