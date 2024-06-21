import { Agendamento } from "@/data/saude/types/agendamento";
import { api } from "@/lib/api";
import { useEffect, useState } from "react";
import { getAgendamentos } from "../../(agendamentos)/_api/get-agendamentos";
import { getRemedios } from "../get-remedios";
import { Remedio } from "@/data/saude/types/remedio";
import { useAuth } from "@/data/auth/hooks/useAuth";
import { Encaminhamento } from "@/data/saude/types/encaminhamento";
import { getEncaminhamentos } from "../get-encaminhamentos";

export function useEncaminhamentosCidadao() {
    const [encaminhamentos, setEncaminhamentos] = useState<Encaminhamento[]>(null); 
    // const { auth } = useAuth()

    useEffect(() => {
        reloadEncaminhamentos()
    }, [])

    async function reloadEncaminhamentos() {
        const encaminhamentos = await getEncaminhamentos();
        setEncaminhamentos(encaminhamentos);
    }

    return {
        encaminhamentos
    }
}