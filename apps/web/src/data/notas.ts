import { db } from "@/lib/db";

export async function getNotaGeral() {
    const [promotores, passivos, detratores, totalVisitas, media] = await Promise.all([
        db.avaliacaoVisita.count({
            where: {
                nota: 5,
            },
        }),
        db.avaliacaoVisita.count({
            where: {
                nota: 4,
            },
        }),
        db.avaliacaoVisita.count({
            where: {
                nota: {
                    lte: 3,
                },
            },
        }),
        db.avaliacaoVisita.count(),
        db.avaliacaoVisita.aggregate({
            _avg: {
                nota: true,
            },
        }),
    ]);

    // Calcular as porcentagens
    const promotoresPercent = ((promotores + passivos) / totalVisitas) * 100;
    const detratoresPercent = (detratores / totalVisitas) * 100;

    // Calcular o NPS
    const nps = promotoresPercent - detratoresPercent;

    return {
        nps: nps.toFixed(0),
        media: media._avg.nota?.toFixed(1)
    }
}

export async function getNotaPorCooperativa() {
    const cooperativas = await db.cooperativa.findMany({
        select: {
            id: true,
            nome: true,
        }
    });

    cooperativas.push({ id: null, nome: 'Sem Cooperativa' } as any);

    // Obter os dados de visitas para cada cooperativa
    const resultados = await Promise.all(cooperativas.map(async (cooperativa) => {
        const [promotores, passivos, detratores, totalVisitas, mediaNotas] = await Promise.all([
            db.avaliacaoVisita.count({
                where: {
                    visita: {
                        cooperativaId: cooperativa.id
                    },
                    nota: 5,
                },
            }),
            db.avaliacaoVisita.count({
                where: {
                    visita: {
                        cooperativaId: cooperativa.id
                    },
                    nota: 4,
                },
            }),
            db.avaliacaoVisita.count({
                where: {
                    visita: {
                        cooperativaId: cooperativa.id
                    },
                    nota: {
                        lte: 3,
                    },
                },
            }),
            db.avaliacaoVisita.count({
                where: {
                    visita: {
                        cooperativaId: cooperativa.id
                    }
                },
            }),
            db.avaliacaoVisita.aggregate({
                _avg: {
                    nota: true,
                },
                where: {
                    visita: {
                        cooperativaId: cooperativa.id
                    }
                },
            }),
        ]);

        // Calcular as porcentagens
        const promotoresPercent = ((promotores + passivos) / totalVisitas) * 100;
        const detratoresPercent = (detratores / totalVisitas) * 100;

        // Calcular o NPS
        const nps = promotoresPercent - detratoresPercent;

        return {
            cooperativa: cooperativa.nome,
            totalVisitas: totalVisitas,
            promotores: promotores,
            passivos: passivos,
            detratores: detratores,
            nps: nps.toFixed(0),
            notaMedia: mediaNotas._avg.nota?.toFixed(1),
        };
    }));

    return resultados;
}