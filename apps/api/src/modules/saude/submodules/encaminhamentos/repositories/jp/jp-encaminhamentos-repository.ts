import { encaminhamentosDoCidadao } from "@/services/jphub/jphub";
import { pec_client } from "../../../../../../services/pec";
import { IEncaminhamentosRepository } from "../interfaces/encaminhamentos-repository-interface";

export class JpEncaminhamentosRepository implements IEncaminhamentosRepository {

    async getencaminhamentosCidadao(co_cidadao: number): Promise<any> {
        return await encaminhamentosDoCidadao(co_cidadao);
    }
}