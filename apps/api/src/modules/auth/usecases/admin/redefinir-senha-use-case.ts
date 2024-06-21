// redefinirSenhaUseCase.ts

import bcrypt from 'bcryptjs';
import { IUsuariosRepository } from "../../repositories/interfaces/usuarios-repository";
import { Prisma, USER } from '@prisma/client';
import { AppError } from '../../../../utils/app-error';

interface IRequisicao {
  user: USER;
  senha_atual: string;
  nova_senha: string;
  confirmar_nova_senha: string;
}

export async function redefinirSenhaUseCase(
  repositorioUsuario: IUsuariosRepository,
  { user, senha_atual, nova_senha, confirmar_nova_senha }: IRequisicao
): Promise<void> {

  const senha_igual = bcrypt.compareSync(senha_atual, user.password);
  if (!senha_igual) {
    throw new AppError("senha atual nao coincide", 400);
  }

  if (nova_senha != confirmar_nova_senha) {
    throw new AppError("senhas divergem", 400);
  }
  
  const senhaHasheada = bcrypt.hashSync(nova_senha, 8);

  user.password = senhaHasheada;
  await repositorioUsuario.update(user.id, {
    password: senhaHasheada
  });
}
