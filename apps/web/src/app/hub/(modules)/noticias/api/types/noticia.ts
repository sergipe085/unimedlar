export type Noticia = {
    id?: string;
    titulo?: string;
    descricao?: string;
    created_at?: Date | string;
    updated_at?: Date | null;
    user_id?: string;
    imagens?: string[];
}