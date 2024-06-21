import { pec_client } from "../../../../../../services/pec";
import { Morador } from "../../models/morador";
import { IConsultasRepository } from "../interfaces/consultas-repository-interface";

export class PecConsultasRepository implements IConsultasRepository {

    async getconsultasCidadao(co_cidadao: Number): Promise<any> {
        const { rows } = await pec_client.query(`
        select 
	 		tdp.no_profissional,
		 	tdus.no_unidade_saude,
		 	to_char(tdt.dt_registro, 'DD-MM-YYYY') as data_consulta,
		 	tes.ds_subjetivo,
		 	teo.ds_objetivo,
		 	tea.ds_avaliacao,
		 	tep.ds_plano,
		 	tc.co_seq_cidadao
		from 
	 		tb_fat_atendimento_individual tfai
		left join 
 			tb_dim_unidade_saude tdus on tdus.co_seq_dim_unidade_saude = tfai.co_dim_unidade_saude_1
		left join
 			tb_dim_tempo tdt on tdt.co_seq_dim_tempo = tfai.co_dim_tempo
		left join
			tb_dim_profissional tdp on tdp.co_seq_dim_profissional = tfai.co_dim_profissional_1
		left join
			tb_fat_cidadao_pec tfcp on tfcp.co_seq_fat_cidadao_pec = tfai.co_fat_cidadao_pec
		left join
			tb_cidadao tc on tc.co_seq_cidadao = tfcp.co_cidadao
		left join 
			tb_atend ta on ta.dt_ultima_alteracao_status = tfai.dt_final_atendimento
		left join
			tb_atend_prof tap on tap.co_atend = ta.co_seq_atend
		left join
			tb_evolucao_subjetivo tes on tes.co_atend_prof = tap.co_seq_atend_prof
		left join
			tb_evolucao_objetivo teo on teo.co_atend_prof = tap.co_seq_atend_prof 
		left join
			tb_evolucao_avaliacao tea on tea.co_atend_prof = tap.co_seq_atend_prof
		left join 
			tb_evolucao_plano tep on tep.co_atend_prof = tap.co_seq_atend_prof
		where
			tc.co_seq_cidadao = $1 or $1 is null
        `, [co_cidadao]);

        console.log(rows)

        return rows;
    }
}