import { JPCard } from "@/app/_components/layout/jp-card";
import { Subtitle } from "@/app/_components/text/subtitle";
import { Title } from "@/app/_components/text/title";
import { Table, TableBody, TableHeader, TableRow } from "@/components/ui/mytable";
import { auth } from "@/data/auth";
import { getNotaGeral, getNotaPorCooperativa } from "@/data/notas";
import { getVisitasDoDia } from "@/data/visitas";
import { Calendar } from "lucide-react";
import { cookies } from "next/headers";

export default async function Dashboard() {
    const visitasDoDia = await getVisitasDoDia(new Date());
    const { nps, media } = await getNotaGeral();
    const cooperativas = await getNotaPorCooperativa();

    return (
        <>
            <div className="flex flex-row items-end gap-4">
                <Title>BI Financeiro</Title>
                <Subtitle>Hoje</Subtitle>   
            </div>
            

            <div className="w-full">
                <Subtitle className="font-semibold mt-8">Indicadores de Gastos</Subtitle>
                <Subtitle className="mt-2 mb-2">Dados financeiros</Subtitle>
                <div className=" flex flex-col md:flex-row w-full h-full gap-4">
                    <JPCard className="p-8 w-full">
                        <Title>1455,25 R$</Title>
                        <Subtitle>Previsão do mês</Subtitle>
                    </JPCard>
                    <JPCard className="p-8 w-full">
                        <Title>125,44 R$</Title>
                        <Subtitle>Total gasto</Subtitle>
                    </JPCard>
                    <JPCard className="p-8 w-full">
                        <Title>22,50 R$</Title>
                        <Subtitle>Média por paciente</Subtitle>
                    </JPCard>
                </div>
                <div className=" flex flex-col w-full h-full flex-wrap pt-8">
                    <Subtitle className="mt-2 mb-2">Dados por Materiais</Subtitle>
                    <TableHeader>MATERIAL,QUANTIDADE,VALOR TOTAL</TableHeader>
                    <TableBody>{
                        [
                            <TableRow>{["CILINDRO DE OXIGENIO", "14", "567,04 R$"]}</TableRow>,
                            <TableRow>{["SERINGA", "67", "158,81 R$"]}</TableRow>,
                        ]
                    }</TableBody>
                </div>
                <div className=" flex flex-col w-full h-full flex-wrap pt-8">
                    <Subtitle className="mt-2 mb-2">Dados por visita</Subtitle>
                    <TableHeader>ENDERECO,PROFISSIONAIS,PACIENTE</TableHeader>
                    <TableBody>
                        {
                            visitasDoDia.map(visita => {
                                return (
                                    <TableRow>
                                        {
                                            [
                                                visita.atendimento?.paciente.endereco ?? "",
                                                visita.atendimento?.profissionaisNecessarios?.toString() ?? "",
                                                visita.atendimento?.paciente.nome ?? "",
                                            ]
                                        }
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </div>
            </div>
        </>
    );
}
  