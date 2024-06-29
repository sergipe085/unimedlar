interface Historico {
    id?: string;
    atendimentoId?: string;
    dataVisita?: string; // Se você deseja usar um objeto Date em vez de string, você pode ajustar isso para `Date`.
    iniciadaEm?: string | null;
    finalizadaEm?: string | null;
    turno?: string; 
    tipo?: string
  }
  