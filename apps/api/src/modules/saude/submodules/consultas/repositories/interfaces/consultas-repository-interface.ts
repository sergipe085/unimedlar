
import { Consulta } from "../../models/consulta";

export interface IConsultasRepository {
    getconsultasCidadao(co_cidadao: Number): Promise<any>;
}