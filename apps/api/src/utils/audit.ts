import { AUDIT_ACTION } from "@prisma/client"
import prisma from "../database"

interface IAudit {
    no_action: AUDIT_ACTION
    no_entity: string
    ds_details: string
    id_entity: string
    id_user: string
}

export async function audit({ no_action, id_entity, ds_details, no_entity, id_user }: IAudit) {
    await prisma.aUDIT.create({
        data: {
            no_action,
            id_entity,
            no_entity,
            ds_details,
            dt_action: new Date(),
            id_user
        }
    })
}