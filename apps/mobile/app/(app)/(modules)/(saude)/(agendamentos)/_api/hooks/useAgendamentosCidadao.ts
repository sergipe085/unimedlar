import { Agendamento } from "@/data/saude/types/agendamento";
import { api } from "@/lib/api";
import { useEffect, useState } from "react";
import { getAgendamentos } from "../get-agendamentos";
import { useLoading } from "@/data/general/hooks/useLoading";

export function useAgendamentosCidadao() {
    const [agendamentos, setAgendamentos] = useState<Agendamento[]>(null); 
    const { run } = useLoading();

    useEffect(() => {
        run(reloadAgendamentos)
    }, [])

    async function reloadAgendamentos() {
        await new Promise((res) => setTimeout(res, 1000))
        const agendamentos = await getAgendamentos();
        setAgendamentos(agendamentos);
    }

    return {
        agendamentos
    }
}