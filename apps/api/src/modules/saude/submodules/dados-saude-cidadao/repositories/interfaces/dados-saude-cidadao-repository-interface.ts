
import { DadosSaudeCidadao } from "../../models/DadosSaudeCidadao";

export interface IDadosSaudeCidadaoRepository {
    getAlergiasCidadao(co_cidadao: Number): Promise<any>;
    getListaProblemasCidadao(co_cidadao: Number): Promise<any>;
    getMedicamentoUsoContinuoCidadao(co_cidadao: Number): Promise<any>;

}