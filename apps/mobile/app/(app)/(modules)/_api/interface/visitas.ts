interface Paciente {
    id: string;
    nome: string;
    cpf: string;
    cns: string;
    endereco: string;
    latitude: number;
    longitude: number;
    cuidadorId: string;
  }
  
  interface Acompanhamento {
    id: string;
    dataInicial: string;
    dataFinal: string;
    pacienteId: string;
    paciente: Paciente;
  }
  
  interface Procedimento {
    id: string;
    atendimentoId: string;
    procedimentoId: string;
    medicamentoId: string | null;
    quantidade: number;
    duracaoEmHoras: number;
    visitasId: string | null;
  }
  
  interface Atendimento {
    id: string;
    intervaloEmDia: number;
    titulo?: string
    duracaoEmHoras: number;
    acompanhamentoId: string;
    profissionaisNecessarios: any[]; // Coloque o tipo correto se souber, atualmente é um array vazio
    acompanhamento: Acompanhamento;
    procedimentos: Procedimento[];
  }
  
export interface Visita {
  id: string;
  dataVisita: string;
  compareceuEm: Date | null;
  naoCompareceuEm: Date | null; 
  avaliacao: Avaliacao;
}

export interface Avaliacao {
  profissionalCompareceu: boolean;
  profissionalCumpriuCargaHoraria: boolean;
}
  
 export interface Visitas {
    proximaVisita: Visita;
    visitas: Visita[];
  }
  