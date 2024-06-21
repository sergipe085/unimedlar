import { Agendamento } from "@/data/saude/types/agendamento";
import { api } from "@/lib/api";
import { useEffect, useState } from "react";
import { getAgendamentos } from "../../(agendamentos)/_api/get-agendamentos";
import { getRemedios } from "../get-remedios";
import { Remedio } from "@/data/saude/types/remedio";
import { useAuth } from "@/data/auth/hooks/useAuth";

export function useMedicamentosCidadao() {
    const [medicamentos, setMedicamentos] = useState<Remedio[]>(null); 
    const { auth } = useAuth()

    useEffect(() => {
        reloadMedicamentos()
    }, [])

    async function reloadMedicamentos() {
        const medicamentos = await getRemedios(auth?.user?.cpf);
        setMedicamentos(medicamentos);
    }

    return {
        medicamentos
    }
}