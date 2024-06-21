import { Prisma, USER } from "@prisma/client";

export interface IUsuariosRepository {
    save(user: Prisma.USERCreateInput): Promise<void>;
    update(id: string, data: Prisma.USERUpdateInput): Promise<void>;
    find(filter: any): Promise<USER[]>;
    findByCpf(cpf: string): Promise<USER | null>;
    findByID(ID: string): Promise<USER>;
    delete(ID: string): Promise<void>;
    ativar(id: string): Promise<void>;
    desativar(id: string): Promise<void>;
    criar(user: Prisma.USERCreateInput): Promise<USER>;
}
