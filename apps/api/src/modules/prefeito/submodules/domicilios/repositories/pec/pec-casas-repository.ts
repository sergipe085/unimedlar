import { pec_client } from "../../../../../../services/pec";
import { Casa } from "../../models/casa";
import { Morador } from "../../models/morador";
import { ICasasRepository } from "../interfaces/casas-repository";

export class PecCasasRepository implements ICasasRepository {
    async detalhesMorador(co_cidadao: number): Promise<any> {
        const { rows: cidadao_detalhes } = await pec_client.query(`
            select 
                no_cidadao
            from tb_cidadao 
            where co_seq_cidadao = $1
        `, [co_cidadao]);

        const { rowCount: cidadao_atendimentos } = await pec_client.query(`
            select * from tb_fat_atendimento_individual ai
            join tb_fat_cidadao_pec cp on cp.co_seq_fat_cidadao_pec = ai.co_fat_cidadao_pec
            where cp.co_cidadao = $1
        `, [co_cidadao]);

        
        return {
            cidadao_detalhes: cidadao_detalhes.length > 0 ? cidadao_detalhes[0] : null,
            cidadao_atendimentos
        }
    }
    async listarCasasNaRua(rua: string): Promise<Casa[]> {
        const { rows } = await pec_client.query(`
            SELECT 
                coalesce(tcci.nu_cpf_responsavel, tcci.nu_cpf_cidadao) as nu_cpf_responsavel,
                coalesce(tcci.nu_cartao_sus_responsavel, tcci.nu_cns_cidadao) as nu_cartao_sus_responsavel ,
                tccd.no_logradouro_filtro,
                tccd.no_logradouro,
                tccd.no_bairro,
                tccd.nu_domicilio,
                tccd.ds_complemento,
                tccd.nu_latitude,
                tccd.nu_longitude,
                tcdf.qt_membros_familia,
                c.co_seq_cidadao as co_seq_cidadao_responsavel
            FROM tb_cds_cad_domiciliar tccd
            JOIN tb_cds_domicilio_familia tcdf ON tcdf.co_cds_cad_domiciliar = tccd.co_seq_cds_cad_domiciliar
            JOIN tb_cds_cad_individual tcci ON tcci.nu_cns_cidadao::text = tcdf.nu_cartao_sus::text OR tcci.nu_cpf_cidadao::text = tcdf.nu_cpf_cidadao::text
            JOIN tb_cidadao c ON c.co_unico_ultima_ficha::text = tcci.co_unico_ficha::text and c.st_ativo_para_exibicao  = 1
            WHERE tccd.st_versao_atual = 1 and no_logradouro_filtro like $1
            group by no_logradouro_filtro, c.co_seq_cidadao, tcdf.qt_membros_familia,
            no_logradouro_filtro, tcci.nu_cpf_responsavel, tcci.nu_cpf_cidadao, tcci.nu_cns_cidadao, nu_cartao_sus_responsavel, tccd.no_logradouro, tccd.no_bairro, tccd.nu_domicilio, tccd.ds_complemento, nu_latitude, nu_longitude;
        `, [`%${rua.toLowerCase()}%`]);

        return rows;
    }
    async listarCasasPorPerto(lat: string, lng: string, raio: number): Promise<Casa[]> {
        throw new Error("Method not implemented.");
    }

    async listarMoradoresDaCasa(casa: Casa): Promise<Morador[]> {
        const { rows } = await pec_client.query(`
        select 
            cidadao.co_seq_cidadao,
            tcci.no_cidadao,
            tcci.nu_cpf_responsavel ,
            tcci.nu_cartao_sus_responsavel,
            tcci.nu_cpf_cidadao,
            tcci.nu_cns_cidadao
        from tb_cds_cad_individual tcci 
        left join tb_cidadao cidadao on cidadao.nu_cpf = tcci.nu_cpf_cidadao or cidadao.nu_cns = tcci.nu_cns_cidadao
        where ( ((nu_cartao_sus_responsavel = $1 or nu_cns_cidadao = $1)) or ((nu_cpf_cidadao = $2 or tcci.nu_cpf_responsavel = $2)) ) and st_versao_atual = 1;
        `, [casa.nu_cns_responsavel, casa.nu_cpf_responsavel]);

        return rows;
    }
}