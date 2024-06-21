import { Casa } from "@modules/prefeito/submodules/domicilios/models/casa";
import { Morador } from "@modules/prefeito/submodules/domicilios/models/morador";

export interface ICasasRepository {
    listarCasasPorPerto(lat: string, lng: string, raio: number): Promise<Casa[]>;
    listarCasasNaRua(rua: string): Promise<Casa[]>;
    listarMoradoresDaCasa(casa: Casa): Promise<Morador[]>; 
    detalhesMorador(co_cidadao: number): Promise<Morador>;
}