import { POSITION, Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { ICargosRepository } from "../interfaces/cargos-repository";
import prisma from "../../../../database";

export class PrismaCargosRepository implements ICargosRepository  {
  async add(data: Prisma.POSITIONCreateInput): Promise<void> {
    await prisma.pOSITION.create({
      data
    });
  }

  async find(): Promise<POSITION[]> {
    const cargos = await prisma.pOSITION.findMany({
      where: {
        is_root: false
      }
    });
    return cargos;
  }

  async deleteById(id: string): Promise<void> {
    await prisma.pOSITION.delete({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, data: Prisma.POSITIONUpdateInput): Promise<void> {
    await prisma.pOSITION.update({
      where: {
        id,
      },
      data
    });
  }
  
}
