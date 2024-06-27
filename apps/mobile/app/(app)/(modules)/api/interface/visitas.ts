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
    atendimentoId: string;
    dataVisita: string;
    iniciadaEm: string | null;
    finalizadaEm: string | null;
    atendimento: Atendimento;
    turno?: string
    tipo?: string 
  }
  
 export interface Visitas {
    proximaVisita: Visita;
    proximasVisitas: Visita[];
  }
  