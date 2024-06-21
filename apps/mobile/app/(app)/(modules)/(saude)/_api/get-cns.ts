import { api } from "@/lib/api"
import { CNS } from "../../../../../data/saude/types/cns"

export async function getCns(): Promise<CNS[]> {
    const response = await api.get(`/CNS/CNS`)
    console.log("cuidares")
    return response.data.data
}