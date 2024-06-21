import { TiposResposta, USER } from "@prisma/client";

export type TypeResposta = {
    id_resposta?: string;//
    tipo_resposta?: TiposResposta;//
    user_id?: string;//
    chamadoId?: string;//
    imagens?: string[];//
    resposta?: string;//
    criado_em?: Date | string;
    atualizado_em?: Date | null;
    user?: USER;
};