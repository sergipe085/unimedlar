import { Button } from "@/app/_components/button";
import { Subtitle } from "@/app/_components/text/subtitle";
import { Title } from "@/app/_components/text/title";
import { TableBody, TableHeader, TableRow } from "@/components/ui/mytable";
import { getAtendimentos } from "@/data/atendimento";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function Atendimentos() {
    const atendimentos = await getAtendimentos();
        
    return (
        <div className="w-full">
            <div className="flex w-full flex-row justify-between">
                <Title>Atendimentos</Title>
                <Link href={"/hub/atendimentos/novo-atendimento"}>
                    <Button>Novo atendimento</Button>
                </Link>
            </div>
            <Subtitle className="mb-4">Atendimentos do Unimed Lar</Subtitle>
            <>
                <TableHeader>PACIENTE,TITULO,INTERVALO,DURACAO,DATA INICIAL,DATA FINAL,COOPERATIVA,QTD PROCEDIMENTOS,QTD VISITAS</TableHeader>
                <TableBody>{
                    atendimentos.map(atendimento => {
                        return (
                            <Link href={`/hub/atendimentos/${atendimento.id}`}>
                                <TableRow key={atendimento.id} onClick={() => console.log("teste")}>
                                    {
                                        [
                                            atendimento.titulo,
                                            atendimento.titulo,
                                            atendimento.dataInicial.toLocaleDateString("pt-BR"), 
                                            atendimento.dataFinal.toLocaleDateString("pt-BR"), 
                                            atendimento.dataInicial.toLocaleDateString("pt-BR")]
                                    }
                                </TableRow>
                            </Link>
                        )
                    })
                }</TableBody>
            </>
        </div>
    );
}
  