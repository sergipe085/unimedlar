import { JPCard } from "@/app/_components/layout/jp-card";
import { Subtitle } from "@/app/_components/text/subtitle";
import { Title } from "@/app/_components/text/title";
import { Table, TableBody, TableHeader, TableRow } from "@/components/ui/mytable";
import { auth } from "@/data/auth";
import { getVisitasDoDia } from "@/data/visitas";
import { Calendar } from "lucide-react";
import { cookies } from "next/headers";

export default async function Dashboard() {
    const visitasDoDia = await getVisitasDoDia(new Date());

    return (
        <>
            <div className="flex flex-row items-end gap-4">
                <Title>Dashboard</Title>
                <Subtitle>Hoje</Subtitle>   
            </div>
            

            <div className="w-full">
                <Subtitle className="font-semibold mt-8">Indicadores de Qualidade</Subtitle>
                <Subtitle className="mt-2 mb-2">Dados gerais</Subtitle>
                <div className=" flex flex-col md:flex-row w-full h-full gap-4">
                    <JPCard className="p-8 w-full">
                        <Title>8.9</Title>
                        <Subtitle>nota média</Subtitle>
                    </JPCard>
                    <JPCard className="p-8 w-full">
                        <Title>7.9</Title>
                        <Subtitle>pontualidade</Subtitle>
                    </JPCard>
                    <JPCard className="p-8 w-full">
                        <Title>9.8</Title>
                        <Subtitle>competencia</Subtitle>
                    </JPCard>
                    <JPCard className="p-8 w-full">
                        <Title>7.6</Title>
                        <Subtitle>profissionalismo</Subtitle>
                    </JPCard>
                </div>
                <div className=" flex flex-col w-full h-full flex-wrap pt-8">
                    <Subtitle className="mt-2 mb-2">Dados por cooperativa</Subtitle>
                    <TableHeader>COOP.,MEDIA,PROF.,COMP.,PONT.,VISITAS</TableHeader>
                    <TableBody>{
                        [
                            <TableRow>{["COOP A","8.9","8.9","8.9","8.9","12/19"]}</TableRow>,
                            <TableRow>{["COOP A","8.9","8.9","8.9","8.9","12/19"]}</TableRow>
                            
                        ]    
                    }</TableBody>
                </div>
                <div className=" flex flex-col w-full h-full flex-wrap pt-8">
                    <Subtitle className="mt-2 mb-2">Visitas do dia</Subtitle>
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
  