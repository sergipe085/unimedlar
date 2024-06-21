import prisma from "@/database";
import { sendPushNotification } from "../expo-notificatios";
import axios from "axios";
import { env } from "@/env";
import { Agendamento } from "./types/agendamento";
import { Encaminhamento } from "./types/encaminhamento";

type Events =
    "regulacao.encaminhamento.solicitado" |
    "regulacao.encaminhamento.autorizado" |
    "regulacao.encaminhamento.agendado" |
    "regulacao.encaminhamento.confirmado" |
    "regulacao.consulta.proxdia"

const apiClient = axios.create({
    baseURL: env.JP_HUB_API_URL,
    headers: {
        Authorization: "Bearer " + env.JP_HUB_API_KEY
    }
})

//ExponentPushToken[VCiTzgNeHdzZr1fa1sISmW]
export async function processEvent(event: string, data: any) {
    switch (event as Events) {
        case "regulacao.encaminhamento.agendado":
            console.log(`PROCESSANDO EVENTO: ${event}`)
            console.log(`DADOS RECEBIDOS: `);
            console.log(data);

            const user = await prisma.uSER.findFirst({
                where: {
                    cpf: data.nu_cpf
                },
                include: {
                    userNotification: true
                }
            })

            console.log(user)

            if (!user) {
                console.log("usuario nao esta valido para receber notificacoes");
            }

            try {

                await sendPushNotification({
                    expoPushToken: user.userNotification.expo_token,
                    title: "Encaminhamento agendado",
                    message: `Seu encaminhamento de ${data.agendamento.ds_procedimento} acabou de ser agendado para a ${data.agendamento.no_unidade_destino}`
                });
            }
            catch (err) {
                console.log(err.message)
            }
            break;
        case "regulacao.consulta.proxdia":
            console.log(`PROCESSANDO EVENTO: ${event}`)
            console.log(`DADOS RECEBIDOS: `);
            console.log(data);

            const user1 = await prisma.uSER.findFirst({
                where: {
                    cpf: data.nu_cpf
                },
                include: {
                    userNotification: true
                }
            })

            console.log(user1)

            if (!user1) {
                console.log("usuario nao esta valido para receber notificacoes");
            }

            try {

                await sendPushNotification({
                    expoPushToken: user1.userNotification.expo_token,
                    title: "Consulta Próxima",
                    message: `Sua consulta do ${data.dt_agendamento} na hora ${data.hr_agendamento} está próxima !`
                });
            }
            catch (err) {
                console.log(err.message)
            }
            break;
        default:
            break;
    }
}


export async function agendamentosDoCidadao(co_cidadao: number): Promise<Agendamento[]> {
    const { data } = await apiClient.get(`/regulacao/fila/agendamentos/${co_cidadao}`);

    return data.data;
}

export async function confirmarPresencaAgendamento(co_unico_agendamento: string): Promise<void> {
    await apiClient.put(`/regulacao/fila/confirmar-presenca/${co_unico_agendamento}`);
}

export async function encaminhamentosDoCidadao(co_cidadao: number): Promise<Encaminhamento[]> {
    const { data } = await apiClient.get(`/regulacao/fila/encaminhamentos/${co_cidadao}`);

    return data.data;
}