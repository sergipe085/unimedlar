import prisma from "@/database";
import { PecDadosSaudeCidadaoRepository } from "@/modules/saude/submodules/dados-saude-cidadao/repositories/pec/pec-dados-saude-cidadao";
import { AppError } from "@/utils/app-error";
import { USER } from "@prisma/client";

export interface IRequest {
    pec_repository: PecDadosSaudeCidadaoRepository;
    cpf: string;
    user: USER;
}

export async function update_co_cidadao_use_case({
    pec_repository,
    cpf,
    user
}: IRequest) {
    const co_seq_cidadao = await pec_repository.getDadosGeraisSaudeCidadao(cpf);

    if (!co_seq_cidadao) {
        throw new AppError("usuario nao possui dados de saude", 404);
    }

    const userSaude = await prisma.uSER.update({
        data: {
            userSaude: {
                create: {
                    co_cidadao: Number(co_seq_cidadao)
                }
            },
        },
        where: {
            id: user.id,
        }
    })
    return {
        userSaude
    }
}