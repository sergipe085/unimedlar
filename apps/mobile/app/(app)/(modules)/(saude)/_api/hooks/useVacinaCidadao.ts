import { Agendamento } from "@/data/saude/types/agendamento";
import { api } from "@/lib/api";
import { useEffect, useState } from "react";
import { getAgendamentos } from "../../(agendamentos)/_api/get-agendamentos";
import { getRemedios } from "../get-remedios";
import { Remedio } from "@/data/saude/types/remedio";
import { useAuth } from "@/data/auth/hooks/useAuth";
import { Vacina } from "@/data/saude/types/vacina";
import { getVacinas } from "../get-vacinas";
import { useLoading } from "@/data/general/hooks/useLoading";

export function useVacinasCidadao() {
    const [vacinas, setVacinas] = useState<Vacina[]>(null); 
    // const { auth } = useAuth()
    const { run } = useLoading();

    useEffect(() => {
        run(reloadVacinas);
    }, [])

    async function reloadVacinas() {
        const vacinas = await getVacinas();
        setVacinas(vacinas);
    }

    return {
        vacinas
    }
}