import { IAuth } from "./express-check-auth";
import { ExpressAppResponse } from "../../../../utils/express-app-response";
import { SYSTEM_ACTION } from "@prisma/client";
import { hasAllPermissions, hasSomePermission } from "../../../../utils/has_permission";

export function checkSomePermission(permissoes_necessarias: SYSTEM_ACTION[]) {
    return async (req, res, next) => {
        // const auth = req.body.auth as IAuth;  
    
        // const has_permission = hasSomePermission(auth, permissoes_necessarias);

        // if (!has_permission) {
        //     return ExpressAppResponse(res).unauthorized({},`
        //         ${auth.user.name} nao tem permissão para ${permissoes_necessarias}
        //     `)
        // }
        
        return next();
    }
}

export function checkAllPermission(permissoes_necessarias: SYSTEM_ACTION[]) {
    return async (req, res, next) => {
        // const auth = req.body.auth as IAuth;  
    
        // const has_permission = hasAllPermissions(auth, permissoes_necessarias);

        // if (!has_permission) {
        //     return ExpressAppResponse(res).unauthorized({},`
        //         ${auth.user.name} nao tem permissão para ${permissoes_necessarias}
        //     `)
        // }
        
        next();
    }
}
