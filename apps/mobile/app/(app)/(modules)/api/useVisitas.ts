import { api } from "@/lib/api";
import { useEffect, useState } from "react";
import { Visitas } from "./interface/visitas";


export function useVisitas() {
    const [visitas, setVisitas] = useState<Visitas>()

    useEffect(() => {
        listVisitas().then(setVisitas);

    }, [])

    return {
        visitas
    }
}
export async function listVisitas(): Promise<Visitas> {
    const { data } = await api.get('/visitas')
    console.log(data)

    return data
}

// export async function problemasSecretaria(idSecretaria: string): Promise<ModelProblemas> {
//     const { data } = await api.get(`ouvidoria-chamados/listar-problemas-modulo/${idSecretaria}`)

//     return data.data
// }

// export async function createProblem(bodyProblema: TypeProblema) {
//     const { data } = await api.post(`ouvidoria-chamados/criar-problemas-modulo`, bodyProblema)

//     return data.data.data
// }

// export async function apagarProblema(idProblema: string) {
//      await api.delete(`ouvidoria-chamados/apagar-problemas-modulo/${idProblema}`)

// }

// export async function createSecretaria(bodyOuvidoria: TypeOuvidoria) {
//     const { data } = await api.post(`ouvidoria-chamados/criar-ouvidoria`, bodyOuvidoria)

//     return data.data.data
// }