import { Agendamento } from "@/data/saude/types/agendamento";
import { api } from "@/lib/api";
import { useEffect, useState } from "react";
import { getAgendamentos } from "../../(agendamentos)/_api/get-agendamentos";
import { getRemedios } from "../get-remedios";
import { Remedio } from "@/data/saude/types/remedio";
import { useAuth } from "@/data/auth/hooks/useAuth";
import { getConsultas } from "../get-consultas";
import { Consulta } from "@/data/saude/types/consulta";

export function useConsultasCidadao() {
    const [consultas, setConsultas] = useState<Consulta[]>(null); 
    // const { auth } = useAuth()

    useEffect(() => {
        reloadMedicamentos()
    }, [])

    async function reloadMedicamentos() {
        const consultas = await getConsultas();
        setConsultas(consultas);
    }

    return {
        consultas
    }
}