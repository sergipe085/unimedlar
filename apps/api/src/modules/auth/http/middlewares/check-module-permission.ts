import { IAuth } from "./express-check-auth";
import prisma from "../../../../database";
import { ExpressAppResponse } from "../../../../utils/express-app-response";
import { SYSTEM_MODULE } from "@prisma/client";

export function checkModulePermission(module: SYSTEM_MODULE) {
    return async (req, res, next) => {
        // const { user } = req.body.auth as IAuth;  
        // // checar permissao do modulo
        // const cargo = await prisma.pOSITION.findUnique({
        //     where: {
        //         id: user.id_position.toString()
        //     }
        // })
        // // ver se o cargo tem o modulo
        // var hasPermission = true;
        
        // // const acao = req.method;
        // if (!cargo.modules.includes(module)) {
        //     hasPermission = false;
        // }
    
        // if (cargo.is_root) {
        //     hasPermission = true;
        // }
    
        // if (!hasPermission) {
        //     return ExpressAppResponse(res).unauthorized({}, `${cargo.name} nao tem permissao modulo: ${module}`);
        // }
        
        next();
    }
}
