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

export function useExamesCidadao() {
    const [exames, setExames] = useState<Exame[]>(null); 
    // const { auth } = useAuth()

    useEffect(() => {
        reloadExames()
    }, [])

    async function reloadExames() {
        const exames = await getExames();
        setExames(exames);
    }

    return {
        exames
    }
}