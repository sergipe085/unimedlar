import { Agendamento } from "@/data/saude/types/agendamento";
import { api } from "@/lib/api";
import { useEffect, useState } from "react";
import { getAgendamentos } from "../../(agendamentos)/_api/get-agendamentos";
import { getRemedios } from "../get-remedios";
import { Remedio } from "@/data/saude/types/remedio";
import { useAuth } from "@/data/auth/hooks/useAuth";
import { Exame } from "@/data/saude/types/exame";
import { getExames } from "../get-exames";
import { ResultadoExame } from "../types/resultadoExame";
import { getResultadoExame } from "../get-resultados-exame";

export function useResultadoExamesCidadao() {
    const [resultadosExame, setResultadosExame] = useState<ResultadoExame[]>()
    // const { auth } = useAuth()

    useEffect(() => {
        reloadResultadosExame()
    }, [])

    
    async function reloadResultadosExame() {
        const resultadosExame = await getResultadoExame();
        setResultadosExame(resultadosExame);
    }

    return {
        resultadosExame
    }
}