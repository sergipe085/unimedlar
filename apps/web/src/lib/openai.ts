import { AssuntoChamado, UrgenciaChamado, TipoChamado } from "@prisma/client";
import OpenAI from "openai";

export const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY
})

export const EXAMPLE_PROMPT = `DATA: \n"Nao estou satisfeito com o profissional que esta me atendento, ele nao me trata bem." 
\n\n-----------\nJSON valido no formato esperado:`

export const EXAMPLE_ANSWER = `{
    prioridade: "MEDIA",
    assunto: "TRATAMENTO_DO_PROFISSIONAL",
    tipo: "RECLAMACAO"
}`

type ClassificateMessageResponse = {
    prioridade: UrgenciaChamado,
    assunto: AssuntoChamado,
    tipo: TipoChamado
}

export async function classificateMessage(message: string): Promise<ClassificateMessageResponse | null> {
    const res = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
        {
            role: "assistant",
            content:
            `Voce é uma IA que ira ler chamados e feedbacks de um sistema de avaliação para uma empresa de saúde que realiza atendimentos home care. O seu papel é entender o que está sendo reclamado e classificar essa mensagem, para que ela seja salva no banco com as devidas classificações e seja possível a filtragem.\n
            Sua resposta deve ser um JSON e nada mais alem disso, nem ates do JSON nem depois do JSON. Somente o JSON.
            O JSON deve ter o seguinte formato: \n
                {
                    prioridade: "MUITO_ALTA" | "ALTA" | "MEDIA" | "BAIXA" | "MUITO_BAIXA",
                    assunto: "SAUDE_DO_PACIENTE" | "CARGA_HORARIA_DO_PROFFISIONAL" | "COMPARECIMENTO_DO_PROFISSIONAL" | "PROFISSIONAL_FEZ_O_QUE_DEVERIA" | "QUALIDADE_DO_ATENDIMENTO" | "TRATAMENTO_DO_PROFISSIONAL" | "PROFISSIONALISMO_DO_PROFISSIONAL" | "FINANCEIRO" | "PLANO_DE_SAUDE" | "OUTRO",
                    tipo: "OUTRO" | "RECLAMACAO" | "ELOGIO",
                    
                }. Voce so pode retornar respostas em JSON.
            `,
        },
        {
            role: "user",
            content: EXAMPLE_PROMPT,
        },
        {
            role: "system",
            content: EXAMPLE_ANSWER,
        },
        {
            role: "user",
            content: message,
        },
        ],
    })

    const text = res.choices[0].message.content

    return text ? JSON.parse(text) : null;
}