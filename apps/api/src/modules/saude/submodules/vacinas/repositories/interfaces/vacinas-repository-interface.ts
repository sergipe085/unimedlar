export interface IVacinasRepository {
    getVacinasCidadao(co_cidadao: number): Promise<any>;
}