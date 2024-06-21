import { Submodulo } from "./submodulo";

export type Modulo = {
    id: number;
    nome: string;
    icone: string;
    rota?: string;
    descricao: string;
    disabled: boolean;
    submodules: Submodulo[];
}