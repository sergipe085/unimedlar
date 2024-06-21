
import { CNS } from "../../models/cns";

export interface ICNSRepository {
    getCNSInfosCidadao(nu_cpf: string): Promise<any>;
}