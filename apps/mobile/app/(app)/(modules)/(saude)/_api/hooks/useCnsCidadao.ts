import { Agendamento } from "@/data/saude/types/agendamento";
import { api } from "@/lib/api";
import { useEffect, useState } from "react";
import { getAgendamentos } from "../../(agendamentos)/_api/get-agendamentos";
import { getRemedios } from "../get-remedios";
import { Remedio } from "@/data/saude/types/remedio";
import { useAuth } from "@/data/auth/hooks/useAuth";
import { getCns } from "../get-cns";
import { CNS } from "@/data/saude/types/cns";
import { useLoading } from "@/data/general/hooks/useLoading";

export function useCNSCidadao() {
    const [cns, setCns] = useState<CNS[]>(null); 
    const { run } = useLoading()

    useEffect(() => {
        run(reloadCNS)
    }, [])

    async function reloadCNS() {
        const cns = await getCns();
        setCns(cns);
    }

    return {
        cns: cns ? cns[0] : null
    }
}