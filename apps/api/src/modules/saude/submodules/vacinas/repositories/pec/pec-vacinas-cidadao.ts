import { pec_client } from "../../../../../../services/pec";
import { IVacinasRepository } from "../interfaces/vacinas-repository-interface";

export class PecVacinasRepository implements IVacinasRepository {

    async getVacinasCidadao(co_cidadao: number): Promise<any> {
        const { rows } = await pec_client.query(`
        select 
            tfvv.no_fabricante,
            tfvv.no_lote,
            tdi.no_imunobiologico,
            tdev.no_estrategia_vacinacao,
            tdt.dt_registro as data_aplicacao,
            tdt.ds_dia_semana as dia_semana_aplicacao,
            tdp.no_profissional,
            cbo.no_cbo,
            tdus.no_unidade_saude,
            tc.no_cidadao,
            tc.nu_cpf,
            tc.dt_nascimento,
            doi.sg_dose_imunobiologico,
            doi.no_dose_imunobiologico,
            doi.no_apresentacao_dose
        from tb_fat_vacinacao_vacina tfvv 
        left join tb_fat_vacinacao tfv on tfv.co_seq_fat_vacinacao = tfvv.co_fat_vacinacao 
        left join tb_dim_imunobiologico tdi on tdi.co_seq_dim_imunobiologico = tfvv.co_dim_imunobiologico
        LEFT JOIN tb_dim_dose_imunobiologico doi ON tfvv.co_dim_dose_imunobiologico = doi.co_seq_dim_dose_imunobiologico
        left join tb_dim_estrategia_vacinacao tdev on tdev.co_seq_dim_estrategia_vacnacao = tfvv.co_dim_estrategia_vacinacao
        left join tb_dim_tempo tdt on tdt.co_seq_dim_tempo = tfvv.co_dim_tempo_vacina_aplicada
        left join tb_dim_profissional tdp on tdp.co_seq_dim_profissional = tfvv.co_dim_profissional
        left join tb_dim_cbo cbo on cbo.co_seq_dim_cbo = tfvv.co_dim_cbo  
        left join tb_dim_unidade_saude tdus on tdus.co_seq_dim_unidade_saude = tfvv.co_dim_unidade_saude
        left join tb_fat_cidadao_pec tfcp on tfcp.co_seq_fat_cidadao_pec = tfv.co_fat_cidadao_pec
        left join tb_cidadao tc on tc.co_seq_cidadao = tfcp.co_cidadao
        where
            tc.co_seq_cidadao = $1 or $1 is null;`, [co_cidadao]);

        return rows;
    }
}