import { ICasasRepository } from "../repositories/interfaces/casas-repository";

interface IReq {
    casas_repository: ICasasRepository;
    rua: string;
}

export async function listar_casas_na_rua_usecase({ casas_repository, rua }: IReq) {
    const casas = await casas_repository.listarCasasNaRua(rua);
    return {
        casas
    }
}