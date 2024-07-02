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
                equals: date
            }
        },
        include: {
            paciente: {
                include: {
                    cuidador: {
                        include: {
                            usuario: true
                        }
                    }
                }
            },
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
        select: {
            id: true,
        },
        where: {
            dataVisita: {
                gte: new Date()
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

export async function getVisitasByPaciente(pacienteId: string) {
    const visitas = await db.visita.findMany({
        select: {
            dataVisita: true,
            id: true,
            compareceuEm: true,
            naoCompareceuEm: true,
            avaliacao: {
                select: {
                    profissionalCompareceu: true,
                    profissionalCumpriuCargaHoraria: true
                }
            }
        },
        where: {
            pacienteId
        },
        orderBy: {
            dataVisita: "asc"
        }
    });

    return visitas;
}

export async function getVisitaById(id: string) {
    const visita = db.visita.findUnique({
        where: {
            id
        },
        include: {
            atendimento: {
                include: {
                    procedimentos: {
                        include: {
                            procedimento: true,
                            medicamento: true
                        }
                    }
                }
            },
            avaliacao: true
        }
    })

    return visita;
}