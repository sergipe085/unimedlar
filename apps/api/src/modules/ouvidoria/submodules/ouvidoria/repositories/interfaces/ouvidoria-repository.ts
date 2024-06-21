import { Ouvidoria, Prisma } from "@prisma/client";

export interface IOuvidoriaRepository {
    save(ouvidoria: Prisma.OuvidoriaCreateInput): Promise<void>;
    update(id: string, data: Prisma.OuvidoriaUpdateInput): Promise<Ouvidoria>;
    delete(id: string): Promise<void>;
    find(filter: Prisma.OuvidoriaWhereInput): Promise<Ouvidoria[]>;
    findByID(id: string): Promise<Ouvidoria | null>;
    createOuvidoria(ouvidoriaData: Prisma.OuvidoriaCreateInput): Promise<Ouvidoria>;
}
