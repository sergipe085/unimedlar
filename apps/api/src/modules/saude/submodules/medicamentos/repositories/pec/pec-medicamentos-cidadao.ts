import { pec_client } from "../../../../../../services/pec";
import { IMedicamentosRepository } from "../interfaces/medicamentos-repository-interface";

export class PecMedicamentosRepository implements IMedicamentosRepository {

    async getMedicamentosReceitadosCidadao(co_cidadao: Number): Promise<any> {
        const { rows } = await pec_client.query(`
        select 
            trm.no_posologia,
            trm.qt_receitada,
            trm.dt_inicio_tratamento,
            trm.dt_fim_tratamento,
            trm.qt_duracao_tratamento,
            trm.ds_dose,
            trtf.no_tipo_frequencia,
            trm.ds_frequencia_dose,
            trm.ds_recomendacao,
            tam.no_aplicacao_medicamento,
            tm.no_principio_ativo,
            tm.ds_concentracao,
            tm.ds_unidade_fornecimento,
            cbo.no_cbo,
            prof.no_profissional,
            tus.no_unidade_saude,
            tc.no_cidadao,
            tc.nu_cpf
        from 
            tb_receita_medicamento trm
        left join tb_atend_prof tap on tap.co_seq_atend_prof = trm.co_atend_prof
        left join tb_atend ta on ta.co_seq_atend = tap.co_atend 
        left join tb_prontuario tp on tp.co_seq_prontuario = ta.co_prontuario
        left join tb_aplicacao_medicamento tam on tam.co_aplicacao_medicamento = trm.co_aplicacao_medicamento 
        left join tb_medicamento tm on tm.co_seq_medicamento = trm.co_medicamento
        left join tb_receita_tipo_frequencia trtf on trtf.co_receita_tipo_frequencia = trm.tp_frequencia_dose 
        left join tb_unidade_saude tus on tus.co_seq_unidade_saude = ta.co_unidade_saude
        left join tb_lotacao tl on tl.co_ator_papel = tap.co_lotacao 
        left join tb_cbo cbo on cbo.co_cbo = tl.co_cbo 
        left join tb_prof prof on prof.co_seq_prof = tl.co_prof 
        left join tb_cidadao tc on tc.co_seq_cidadao = tp.co_cidadao
        where 
            tc.co_seq_cidadao = $1 or $1 is null;`, [co_cidadao]);

        return rows;
    }
}