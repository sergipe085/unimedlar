import { IOuvidoriaRepository } from "../../ouvidoria/repositories/interfaces/ouvidoria-repository";
import { Prisma, Ouvidoria, StatusDenuncia } from '@prisma/client';
import { AppError } from '../../../../../utils/app-error';

interface IRequisicao {
  userId: string;
  titulo: string;
  descricao: string;
  moduloId: string;
  urlImagem?: string;
}

interface IDeletarRequisicao {
ouvidoriaId: string;
}

interface IAtualizarStatusRequisicao {
ouvidoriaId: string;
novoStatus: StatusDenuncia;
}  

export async function criarOuvidoriaUseCase(

  repositorioOuvidoria: IOuvidoriaRepository,
  { userId, titulo, descricao, moduloId, urlImagem }: IRequisicao
): Promise<Ouvidoria> {

  if (!titulo || !descricao || !moduloId || !userId) {
    throw new AppError("Dados obrigatórios para a criação da ouvidoria estão faltando.", 400);
  }


  const ouvidoriaData: Prisma.OuvidoriaCreateInput = {
    user: {
      connect: { id: userId }
    },
    modulo: {
      connect: { id: moduloId }
    },
    titulo: titulo,
    descricao: descricao,
    status: 'PENDENTE', 
    url_imagem: urlImagem,
    criado_em: new Date(),
    atualizado_em: new Date()
  };

  const novaOuvidoria = await repositorioOuvidoria.createOuvidoria(ouvidoriaData);

  return novaOuvidoria;

}


  
export async function deletarOuvidoriaUseCase(

repositorioOuvidoria: IOuvidoriaRepository,
{ ouvidoriaId }: IDeletarRequisicao

): Promise<void> {
if (!ouvidoriaId) {
    throw new AppError("O identificador da ouvidoria é obrigatório para exclusão.", 400);
}

const ouvidoria = await repositorioOuvidoria.findByID(ouvidoriaId);

if (!ouvidoria) {
    throw new AppError("Ouvidoria não encontrada.", 404);
}

await repositorioOuvidoria.delete(ouvidoriaId);
}



export async function atualizarStatusOuvidoriaUseCase(
    repositorioOuvidoria: IOuvidoriaRepository,
    { ouvidoriaId, novoStatus }: IAtualizarStatusRequisicao
  ): Promise<Ouvidoria> {
    if (!ouvidoriaId || !novoStatus) {
      throw new AppError("Dados obrigatórios para a atualização de status estão faltando.", 400);
    }
  
    const ouvidoria = await repositorioOuvidoria.findByID(ouvidoriaId);
    if (!ouvidoria) {
      throw new AppError("Ouvidoria não encontrada.", 404);
    }
  
    const ouvidoriaAtualizada = await repositorioOuvidoria.update(ouvidoriaId, {
      status: novoStatus
    });
  
    return ouvidoriaAtualizada;
  }



