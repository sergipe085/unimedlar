import {  Prisma } from "@prisma/client";
import { TypeOuvidoria } from "../../models/TypeOuvidoria";
import { TypeResposta } from "../../models/TypeResposta";

export interface IOuvidoria {
    criarChamados(ouvidoriaData: TypeOuvidoria): Promise<TypeOuvidoria>;
    atualizarChamados(id: string, ouvidoriaData: TypeOuvidoria): Promise<TypeOuvidoria>;
    apagarChamados(id: string): Promise<void>;
    listarChamados(): Promise<TypeOuvidoria[]>
    listarChamadosPorUser(idUser: string): Promise<TypeOuvidoria[]>
    detalhesOuvidoria(id: string): Promise<TypeOuvidoria>;

    criar_resposta(respostaData: Prisma.RespostasOuvidoriaCreateInput): Promise<TypeResposta>
    atualizar_resposta(idResposta: string, respostaData: TypeResposta): Promise<TypeResposta>
    apagar_resposta(id: string): Promise<void>
    listar_respostas(): Promise<TypeResposta[]>
    listar_respostas_por_chamado(idChamado: string): Promise<TypeResposta[]>
    detalhes_resposta(id: string): Promise<TypeResposta>
    listar_respostas_por_user(idUser: string): Promise<TypeResposta[]>
}