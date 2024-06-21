export type Submodulo = {
    id: string;
    nome: string;
    icone: string;
    disabled: boolean;
    submodules: Submodulo[];
    numero?: string | number;
}