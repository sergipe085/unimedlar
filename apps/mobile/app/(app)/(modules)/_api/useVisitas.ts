import { api } from "@/lib/api";
import { useEffect, useState } from "react";
import { Visitas } from "./interface/visitas";

interface Procedimento {
    id: string;
    atendimentoId: string;
    procedimentoId: string | null;
    medicamentoId: string | null;
    quantidade: number;
    duracaoEmHoras: number;
    procedimento: {
      id: string;
      nome: string;
      valor: number;
    } | null;
    medicamento: {
      id: string;
      nome: string;
      catmat: string;
    } | null;
  }
  
  interface Atendimento {
    id: string;
    titulo: string;
    dataInicial: string;
    dataFinal: string;
    pacienteId: string;
    intervaloEmDia: number;
    duracaoEmHoras: number;
    profissionaisNecessarios: string[]  ;
    turno: string;
    status: string;
    cooperativaId: string | null;
    procedimentos: Procedimento[];
  }
  
  interface Detalhes {
    id: string;
    dataVisita: string;
    turno: string;
    tipo: string;
    cooperativaId: string | null;
    compareceuEm: string | null;
    naoCompareceuEm: string | null;
    avaliacaoVisitaId: string | null;
    atendimentoId: string;
    pacienteId: string;
    atendimento: Atendimento;
    avaliacao: any | null;
  }
  


export function useVisitas() {
    const [visitas, setVisitas] = useState<Visitas>()

    useEffect(() => {
        listVisitas().then(setVisitas);

    }, [])

    return {
        visitas
    }
}
export function useDetalhes(idVisita) {
    const [detalhes, setDetalhes] = useState<Detalhes>()

    useEffect(() => {
        detalhesVisita(idVisita).then(setDetalhes);

    }, [idVisita])

    return {
        detalhes
    }
}
export async function listVisitas(): Promise<Visitas> {
    const { data } = await api.get('/visitas')
    console.log(data)

    return data
}

export async function detalhesVisita(idVisita: string): Promise<Detalhes> {
    const { data } = await api.get(`/visitas/${idVisita}`)
    console.log(data)

    return data.visita
}

