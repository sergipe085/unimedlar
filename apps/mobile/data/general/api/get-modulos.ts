import { api } from "@/lib/api";
import { Modulo } from "../types/modulo";

export async function getModulos(): Promise<Modulo[]> {
    const response = await api.get(`/ouvidoria/modulos`)
    return response.data.data
}