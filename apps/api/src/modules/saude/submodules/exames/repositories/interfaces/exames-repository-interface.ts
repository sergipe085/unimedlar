
export interface IExamesRepository {
    getExamesRequisitadosCidadao(co_cidadao: Number): Promise<any>;
    getExamesResultadosCidadao(co_cidadao: Number): Promise<any>;
}