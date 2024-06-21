
export interface IMedicamentosRepository {
    getMedicamentosReceitadosCidadao(co_cidadao: Number): Promise<any>;
}