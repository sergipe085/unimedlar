import { pec_client } from "../../../../../../services/pec";
import { IExamesRepository } from "../interfaces/exames-repository-interface";

export class PecExamesRepository implements IExamesRepository {

    async getExamesRequisitadosCidadao(co_cidadao: Number): Promise<any> {
        
        const { rows } = await pec_client.query(`
        select 
            tc.no_cidadao,
            tc.nu_cpf,
            tre.dt_requisicao,
            tre.ds_justificativa_procedimento,
            tre.ds_observacao,
            cid.no_cid10,
            tus.no_unidade_saude,
            cbo.no_cbo,
            prof.no_profissional
        from    
            tb_requisicao_exame tre
        left join tb_cid10 cid on cid.co_cid10 = tre.co_cid10
        left join tb_atend_prof tap on tap.co_seq_atend_prof = tre.co_atend_prof
        left join tb_atend ta on ta.co_seq_atend = tap.co_atend 
        left join tb_prontuario tp on tp.co_seq_prontuario = ta.co_prontuario
        left join tb_lotacao tl on tl.co_ator_papel = tap.co_lotacao
        left join tb_cbo cbo on cbo.co_cbo = tl.co_cbo 
        left join tb_prof prof on prof.co_seq_prof = tl.co_prof
        left join tb_unidade_saude tus on tus.co_seq_unidade_saude = tl.co_unidade_saude
        left join tb_cidadao tc on tc.co_seq_cidadao = tp.co_cidadao
        where 
            tc.co_seq_cidadao = $1 or $1 is null`, [co_cidadao]);

        return rows;
    }


    async getExamesResultadosCidadao(co_cidadao: Number):Promise<any> {
        const { rows } = await pec_client.query(`
        select 
            tp.co_cidadao,
            proced.no_proced,
            to_char(ter.dt_solicitacao, 'DD/MM/YYYY') as data_solicitacao_exame,
            to_char(ter.dt_realizacao, 'DD/MM/YYYY') as data_realizacao_exame,
            to_char(ter.dt_resultado, 'DD/MM/YYYY')  as data_saida_resultado_exame,
            ter.ds_resultado,
            ter.ds_observacao 
        from 
            tb_exame_requisitado ter
        left join
            tb_proced proced on proced.co_seq_proced = ter.co_proced
        left join
            tb_prontuario tp on tp.co_seq_prontuario = ter.co_prontuario
        where tp.co_cidadao = $1;`, [co_cidadao]);

        return rows;
    }


}