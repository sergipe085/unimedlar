import { POSITION, Prisma } from "@prisma/client";

export interface ICargosRepository {
    add(cargo: Prisma.POSITIONCreateInput): Promise<void>;
    find(): Promise<POSITION[]>;
    deleteById(id: string): Promise<void>;
    update(id: string, cargo: Prisma.POSITIONUpdateInput): Promise<void>;
}
