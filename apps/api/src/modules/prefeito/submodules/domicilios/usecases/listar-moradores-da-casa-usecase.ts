import { Casa } from "../models/casa";
import { ICasasRepository } from "../repositories/interfaces/casas-repository";

interface IReq {
    casas_repository: ICasasRepository;
    casa: Casa;
}

export async function listar_moradores_da_casa_usecase({ casas_repository, casa }: IReq) {
    const moradores = await casas_repository.listarMoradoresDaCasa(casa);
    return {
        moradores
    }
}