import { PrismaCargosRepository } from '@/modules/auth/repositories/prisma/cargos-repository-prisma';
import { ExpressAppResponse } from '../../../../../utils/express-app-response';

const positionsRepository = new PrismaCargosRepository();

export async function delete_position_controller(req, res) {
  const { id } = req.params;
  await positionsRepository.deleteById(id);
  return ExpressAppResponse(res).success('Cargo deletado com sucesso');
};
