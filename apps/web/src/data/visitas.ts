import { db } from "@/schemas/lib/db";

export async function getVisitas() {
    const visitas = await db.visita.findMany({
        include: {
            atendimento: {
                include: {
                    acompanhamento: {
                        include: {
                            paciente: true
                        }
                    }
                }
            }
        }
    });

    return visitas;
}

export async function getVisitasDoDia(date: Date) {
    const visitas = await db.visita.findMany({
        where: {
            dataVisita: {
                lt: date
            }
        },
        include: {
            atendimento: {
                include: {
                    acompanhamento: {
                        include: {
                            paciente: true
                        }
                    }
                }
            }
        }
    });

    console.log(visitas)

    return visitas;
}