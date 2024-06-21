import { pec_client } from "../../../../../../services/pec";
import { IEncaminhamentosRepository } from "../interfaces/encaminhamentos-repository-interface";

export class PecEncaminhamentosRepository implements IEncaminhamentosRepository {

    async getencaminhamentosCidadao(co_cidadao: number): Promise<any> {
        const { rows } = await pec_client.query(`
        select
            tc.no_cidadao,
            tc.nu_cpf as cpf,
            tc.dt_nascimento,
            tc.no_sexo as sexo,
            tcr.no_classificacao_risco as classificacao_risco,
            tes.ds_especialidade_sisreg as especialidade_sisreg,
            te.ds_motivo_encaminhamento as motivo_encaminhamento, 
            te.ds_observacao as observacao_encaminhamento,
            cid.no_cid10,
            ciap.ds_ciap,
            ta.dt_encaminhamento,
            cbo.no_cbo,
            prof.no_profissional,
            tus.no_unidade_saude 
        from
            tb_encaminhamento te
        left join tb_atend_prof tap on tap.co_seq_atend_prof = te.co_atend_prof 
        left join tb_prontuario tp on tp.co_seq_prontuario = te.co_prontuario
        left join tb_especialidade_sisreg tes on tes.co_especialidade_sisreg = te.co_especialidade_sisreg 
        left join tb_cid10 cid on cid.co_cid10 = te.co_cid10
        left join tb_ciap ciap on ciap.co_seq_ciap = te.co_ciap
        left join tb_classificacao_risco tcr on tcr.co_classificacao_risco = te.co_classificacao_risco_encam
        left join tb_atend ta on ta.co_seq_atend = tap.co_atend
        left join tb_cidadao tc on tc.co_seq_cidadao = tp.co_cidadao
        left join tb_lotacao tl on tl.co_ator_papel = tap.co_lotacao 
        left join tb_cbo cbo on cbo.co_cbo = tl.co_cbo 
        left join tb_prof prof on prof.co_seq_prof = tl.co_prof
        left join tb_unidade_saude tus on tus.co_seq_unidade_saude = tl.co_unidade_saude 
        where 
            tc.co_seq_cidadao = $1 or $1 is null;
        `, [co_cidadao]);

        return rows;
    }
}