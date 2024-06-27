import { db } from "../lib/db";

export async function getVisitas() {
    const visitas = await db.visita.findMany({
        include: {
            atendimento: {
                include: {
                    paciente: true
                }
            }
        },
        orderBy: {
            dataVisita: "desc"
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
                    paciente: true
                }
            }
        }
    });

    console.log(visitas)

    return visitas;
}

export async function getProximaVisitaDoPaciente(pacienteId: string) {
    const visitas = await db.visita.findFirst({
        where: {
            dataVisita: {
                lte: new Date()
            },
            pacienteId
        },
        orderBy: {
            dataVisita: "desc"
        },
        include: {
            atendimento: {
                include: {
                    paciente: true,
                    procedimentos: true
                }
            }
        }
    });

    console.log(visitas)

    return visitas;
}

export async function getProximasVisitasDoPaciente(pacienteId: string) {
    const visitas = await db.visita.findMany({
        where: {
            dataVisita: {
                gt: new Date()
            },
            pacienteId
        },
        orderBy: {
            dataVisita: "asc"
        }
    });

    console.log(visitas)

    return visitas;
} 

export async function getHistoricoVisitasDoPaciente(pacienteId: string) {
    const visitas = await db.visita.findMany({
        where: {
            dataVisita: {
                lte: new Date()
            },
            pacienteId
        }
    });

    console.log(visitas)

    return visitas;
}