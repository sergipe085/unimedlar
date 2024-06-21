import { pec_client } from "../../../../../../services/pec";
import { ICNSRepository } from "../interface/cns-repository-interface";

export class PecCNSRepository implements ICNSRepository {
    async getCNSInfosCidadao(nu_cpf: string): Promise<any> {
        const { rows } = await pec_client.query(`
        select
            no_cidadao,
            nu_cns,
            dt_nascimento,
            no_sexo
            from tb_cidadao tc 
            where 
                nu_cpf = $1 or $1 is null
        `, [nu_cpf]);

        return rows;
    }
}