import { Agendamento } from "@/data/saude/types/agendamento";
import { api } from "@/lib/api";
import { useEffect, useState } from "react";
import { getAgendamentos } from "../../(agendamentos)/_api/get-agendamentos";
import { getAlergiasCidadao } from "../get-alergias-cidadao";
import { AlergiasCidadao } from "../types/alergiasCidadao";
import { ProblemasCidadao } from "../types/problemasCidadao";
import { getProblemasCidadao } from "../get-problemas-cidadao";
import { MedicamentosContinuos } from "../types/medicamentosContinuos";
import { getMedicamentosContinuosCidadao } from "../get-medicamentos-continuos";
import { useLoading } from "@/data/general/hooks/useLoading";

export function useDadosSaudeCidadao() {
    const [alergias, setAlergias] = useState<AlergiasCidadao[]>()
    const [problemas, setProblemas] = useState<ProblemasCidadao[]>()
    const [medicamentos, setMedicamentos] = useState<MedicamentosContinuos[]>()
    const { run } = useLoading();

    useEffect(() => {
        run(getDadosSaude)
    }, [])

    async function getDadosSaude() {
        await Promise.all([
            getAlergias(),
            getProblemas(),
            getMedicamentosContinuos()
        ])
    }

    async function getAlergias() {
        const alergias = await getAlergiasCidadao();
        setAlergias(alergias);
    }
    async function getProblemas() {
        const problemas = await getProblemasCidadao();
        setProblemas(problemas);
    }
    async function getMedicamentosContinuos() {
        const medicamentos = await getMedicamentosContinuosCidadao();
        setMedicamentos(medicamentos);
    }

    return {
        alergias,
        problemas,
        medicamentos
    }
}