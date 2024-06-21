import { IAuth } from "@modules/auth/http/middlewares/express-check-auth";
import { SYSTEM_ACTION } from "@prisma/client";

export function hasSomePermission(auth: IAuth, acoes: SYSTEM_ACTION[]) {
    if (auth.user.position.is_root) {
        return true;
    }

    return acoes.some(a => auth.user.position.actions.includes(a));
}

export function hasAllPermissions(auth: IAuth, acoes: SYSTEM_ACTION[]) {
    if (auth.user.position.is_root) {
        return true;
    }

    return acoes.every(a => auth.user.position.actions.includes(a));
}