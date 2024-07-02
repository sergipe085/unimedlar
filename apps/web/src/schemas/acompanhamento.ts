import { TiposProfissionais } from "@prisma/client";
import { z } from "zod";

export const adicionarAtendimentoSchema = z.object({
    idPaciente: z.string(),
    titulo: z.string(),
    intervaloEmDia: z.number().min(1, 'Intervalo deve ser no mínimo 1 dia'),
    procedimentos: z.array(z.object({
        procedimentoId: z.string().optional().nullable(),
        medicamentoId: z.string().optional().nullable(),
        quantidade: z.number().min(1, 'Quantidade deve ser no mínimo 1'),
        duracaoEmHoras: z.number().min(0.2, 'Duração deve ser no mínimo 0,2 hora'),
        tipo: z.enum(["procedimento", "medicamento"])
    })).min(1, 'Adicione pelo menos um procedimento'),
    profissionaisNecessarios: z.array(z.enum([TiposProfissionais.ENFERMEIRO, TiposProfissionais.FISIOTERAPEUTA, TiposProfissionais.MEDICO])).min(1, 'Adicione pelo menos um profissional'),
    dataInicial: z.coerce.date(),
    dataFinal: z.coerce.date()
})

export type AdicionarAtendimentoDTO = z.infer<typeof adicionarAtendimentoSchema>;