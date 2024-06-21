

export interface IEncaminhamentosRepository {
    getencaminhamentosCidadao(co_cidadao: number): Promise<any>;
}