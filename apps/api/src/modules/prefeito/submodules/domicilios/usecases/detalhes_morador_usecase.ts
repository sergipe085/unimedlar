import { AppError } from "@utils/app-error";
import { ICasasRepository } from "../repositories/interfaces/casas-repository";

export interface IRequest {
    casas_repository: ICasasRepository;
    co_cidadao: number;
}

export async function detalhes_morador_usecase({
    casas_repository,
    co_cidadao
}: IRequest) {
    const morador = await casas_repository.detalhesMorador(co_cidadao);
    return {
        morador
    }
}