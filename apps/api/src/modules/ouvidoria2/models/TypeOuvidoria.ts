import { StatusDenuncia } from "@prisma/client";

export type TypeOuvidoria = {
    id?: string;
    titulo?: string;
    descricao?: string;
    criado_em?: Date | string;
    atualizado_em?: Date | null;
    user_id?: string;
    imagens?: string[];
    status?: StatusDenuncia
    moduloId?: string;
    latitude?: number;
    longitude?: number;
    idade?: string
};