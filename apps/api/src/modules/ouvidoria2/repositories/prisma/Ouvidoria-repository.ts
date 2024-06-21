import { Prisma, $Enums, Ouvidoria } from '@prisma/client';
import { IOuvidoria } from '../interfaces/Ouvidoria';
import prisma from '@/database';
import { TypeOuvidoria } from '../../models/TypeOuvidoria';
import { TypeResposta } from '../../models/TypeResposta';
const { formatDistanceToNow } = require('date-fns');
const { ptBR } = require('date-fns/locale');

export class OuvidoriaRepository implements IOuvidoria {
    async atualizar_resposta(idResposta: string, respostaData: TypeResposta): Promise<TypeResposta> {
        const resposta = await prisma.respostasOuvidoria.update({
            where: {
                id_resposta: idResposta
            },
            data: {
                resposta: respostaData.resposta,
                ouvidoria: {
                    connect: {
                        id: respostaData.chamadoId
                    }
                },
                imagens: respostaData.imagens,
                tipo_resposta: respostaData.tipo_resposta,
                user: {
                    connect: {
                        id: respostaData.user_id
                    }
                }
            }
        })
        return resposta;
    }
    async apagar_resposta(id: string): Promise<void> {
        await prisma.respostasOuvidoria.delete({
            where: {
                id_resposta: id
            }
        })
    }
    async listar_respostas(): Promise<TypeResposta[]> {
        const respostas = await prisma.respostasOuvidoria.findMany()

        return respostas;
    }
    async listar_respostas_por_chamado(idChamado: string): Promise<TypeResposta[]> {
        const respostas = await prisma.respostasOuvidoria.findMany({
            where: {
                chamadoId: idChamado
            }
        })

        return respostas;
    }
    async detalhes_resposta(id: string): Promise<TypeResposta> {
        const respostas = await prisma.respostasOuvidoria.findUnique({
            where: {
                id_resposta: id
            }
        })

        return respostas;
    }
    async listar_respostas_por_user(idUser: string): Promise<TypeResposta[]> {
        const respostas = await prisma.respostasOuvidoria.findMany({
            where: {
                user_id: idUser
            },
        })

        return respostas;
    }
    async criar_resposta(respostaData: Prisma.RespostasOuvidoriaCreateInput) {
        const resposta = await prisma.respostasOuvidoria.create({
            data: respostaData,
            include: {
                ouvidoria: {
                    include: {
                        user: {
                            include: {
                                userNotification: true
                            }
                        }
                    }
                }
            }
        })
        return resposta;
    }
    async detalhesOuvidoria(id: string) {
        const detalhesChamado = await prisma.ouvidoria.findUnique({
            where: {
                id: id,
            },
        })

        return detalhesChamado;
    }
    async criarChamados(ouvidoriaData: TypeOuvidoria) {
        const chamado = await prisma.ouvidoria.create({
            data: {
                titulo: ouvidoriaData.titulo,
                descricao: ouvidoriaData.descricao,
                status: ouvidoriaData.status,
                imagens: ouvidoriaData.imagens,
                user: {
                    connect: {
                        id: ouvidoriaData.user_id
                    }
                },
                moduloId: ouvidoriaData.moduloId,
                latitude: ouvidoriaData.latitude,
                longitude: ouvidoriaData.longitude
            }
        });

        return chamado;
    }

    async atualizarChamados(id: string, ouvidoriaData: TypeOuvidoria) {
        const chamado = await prisma.ouvidoria.update({
            where: {
                id: id
            },
            data: {
                titulo: ouvidoriaData.titulo,
                descricao: ouvidoriaData.descricao,
                status: ouvidoriaData.status,
                imagens: ouvidoriaData.imagens,
                user: {
                    connect: {
                        id: ouvidoriaData.user_id
                    }
                },
                moduloId: ouvidoriaData.moduloId,
                criado_em: ouvidoriaData.criado_em,
                atualizado_em: new Date(),
            }
        });

        return chamado;
    }
    async apagarChamados(id: string): Promise<void> {
        await prisma.ouvidoria.delete({
            where: {
                id: id,
            },
        })
    }
    async listarChamados() {
        const chamados = await prisma.ouvidoria.findMany({
            select: {
                id: true,
                moduloId: true,
                titulo: true,
                descricao: true,
                status: true,
                criado_em: true,
            }
        })

        const chamadosComIdade = chamados.map(c => {
            return {
                ...c,
                idade: formatDistanceToNow(new Date(c.criado_em), { addSuffix: true, locale: ptBR })
            }
        })

        return chamadosComIdade;
    }
    async listarChamadosPorUser(idUser: string) {
        const chamados = await prisma.ouvidoria.findMany({
            where: {
                user: {
                    id: idUser
                }
            },
            select: {
                id: true,
                moduloId: true,
                titulo: true,
                descricao: true,
                status: true,
            }
        })

        return chamados;
    }

}