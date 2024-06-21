import { z } from 'zod';
import { login_use_case } from '../../usecases/login-use-case';
import { ExpressAppResponse } from '../../../../utils/express-app-response';
import { PrismaUsuariosRepository } from '@/modules/auth/repositories/prisma/users-repository-prisma';

const usersRepository = new PrismaUsuariosRepository();

export async function login_controller(req, res) {
    const loginSchema = z.object({
        username: z.string(),
        password: z.string(),
        token_notification: z.string().optional()
    });
    const { username, password, token_notification } = loginSchema.parse(req.body);

    const response = await login_use_case(usersRepository, { username, password, token_notification });
    if (response == null) {
        return ExpressAppResponse(res).error(400, "login invalido");
    }

    const { user, token } = response;

    return ExpressAppResponse(res).success({
        user,
        token
    });
};
