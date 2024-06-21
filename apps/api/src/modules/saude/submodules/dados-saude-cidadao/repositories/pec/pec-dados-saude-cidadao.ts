import { pec_client } from "../../../../../../services/pec";
import { DadosSaudeCidadao } from "../../models/DadosSaudeCidadao";
import { IDadosSaudeCidadaoRepository } from "../interfaces/dados-saude-cidadao-repository-interface";

export class PecDadosSaudeCidadaoRepository implements IDadosSaudeCidadaoRepository {

    async getDadosGeraisSaudeCidadao(co_cidadao: Number): Promise<number | null> {
        console.log(co_cidadao);
        const { rows } = await pec_client.query(`
            select co_seq_cidadao from tb_cidadao 
            where co_seq_cidadao = $1
            order by co_seq_cidadao desc`,
        [co_cidadao]) 

        if (rows.length == 0) {
            return null;
        }

        return rows[0].co_seq_cidadao;
    }

    async getAlergiasCidadao(co_cidadao: Number): Promise<any> {
        const { rows } = await pec_client.query(`
        select 
            ta.co_seq_alergia,
            tc.no_cidadao,
            tc.nu_cpf,
            tm.no_principio_ativo as nome_medicamento,
            tm.ds_concentracao as concentracao_medicamento,
            tm.no_principio_ativo_filtro,
            tca.no_criticidade_alergia,
            tcsa.no_categ_substancia_alergia
        from tb_alergia ta
            left join tb_prontuario tp on tp.co_seq_prontuario = ta.co_prontuario
            left join tb_cidadao tc on tc.co_seq_cidadao = tp.co_cidadao
            left join tb_substancia_espec_alergia tsea on tsea.co_seq_substanc_espec_alergia = ta.co_substancia_especifica
            left join tb_medicamento_catmat tmc on tmc.co_medicamento_catmat = tsea.co_medicamento_catmat
            left join tb_medicamento tm on tm.co_seq_medicamento = tmc.co_medicamento
            left join tb_alergia_evolucao tae on tae.co_seq_alergia_evolucao = ta.co_ultima_alergia_evolucao 
            left join tb_criticidade_alergia tca on tca.co_criticidade_alergia = tae.co_criticidade_alergia 
            left join tb_categ_substancia_alergia tcsa on tcsa.co_seq_cat_substancia_alergia = tsea.co_categoria 
        where tc.co_seq_cidadao = $1;
        `, [co_cidadao]);

        return rows;
    }


    async getListaProblemasCidadao(co_cidadao: Number): Promise<any> {
        const { rows } = await pec_client.query(`
        select 
            tc.no_cidadao,
            tc.nu_cpf,
            ciap.ds_ciap,
            cid.no_cid10,
            tsp.co_situacao_problema,
            tsp.no_situacao_problema,
            tpe.dt_inicio_problema,
            tpe.dt_fim_problema
        from tb_problema tpm
            left join tb_ciap ciap on ciap.co_seq_ciap = tpm.co_ciap 
            left join tb_cid10 cid on cid.co_cid10 = tpm.co_cid10
            left join tb_problema_evolucao tpe on tpe.co_seq_problema_evolucao = tpm.co_ultimo_problema_evolucao
            left join tb_situacao_problema tsp on tsp.co_situacao_problema = tpe.co_situacao_problema
            left join tb_prontuario tp on tp.co_seq_prontuario = tpm.co_prontuario
            left join tb_cidadao tc on tc.co_seq_cidadao = tp.co_cidadao
        where (tsp.co_situacao_problema = 0 or tsp.co_situacao_problema = 1) and tc.co_seq_cidadao = $1;
        `, [co_cidadao]);

        return rows

    }

    async getMedicamentoUsoContinuoCidadao(co_cidadao: Number): Promise<any> {
        const { rows } = await pec_client.query(`
        select 
            tc.no_cidadao,
            tc.nu_cpf,
            tm.no_principio_ativo,
            tm.ds_concentracao,
            tm.ds_unidade_fornecimento,
            trm.no_posologia,
            trm.qt_receitada,
            trm.dt_inicio_tratamento,
            trm.dt_fim_tratamento
        from tb_medicamento_uso_continuo tmuc
            left join tb_medicamento tm on tm.co_seq_medicamento = tmuc.co_medicamento 
            left join tb_prontuario tp on tp.co_seq_prontuario = tmuc.co_prontuario 
            left join tb_cidadao tc on tc.co_seq_cidadao = tp.co_cidadao
            left join tb_receita_medicamento trm on trm.co_seq_receita_medicamento = tmuc.co_ultima_receita_medicamento
        where tc.co_seq_cidadao = $1;
        `, [co_cidadao]);

        return rows

    }

}