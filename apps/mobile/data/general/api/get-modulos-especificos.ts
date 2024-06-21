import { api } from "@/lib/api"
import { Modulo } from "../types/modulo"


export async function getModulosEspecificos(id: string): Promise<Modulo> {
    console.log(`/ouvidoria/modulos-espedificos?id=${id.toString()}`)

    try {
        const response = await api.get(`/ouvidoria/modulos-espedificos?id=${id.toString()}`)
        return response.data.data
    }
    catch(err) {
        console.log(err.message)
    }
}