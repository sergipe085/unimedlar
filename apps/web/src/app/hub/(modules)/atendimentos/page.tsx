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
                <TableHeader>PACIENTE,TITULO,INTERVALO,DURACAO,DATA INICIAL,DATA FINAL,COOPERATIVA,VISITAS RESTANTES,PRESENCA</TableHeader>
                <TableBody>{
                    atendimentos.map(atendimento => {
                        return (
                            <Link  key={atendimento.id} href={`/hub/atendimentos/${atendimento.id}`}>
                                <TableRow onClick={() => console.log("teste")}>
                                    {
                                        [
                                            atendimento.paciente.nome,
                                            atendimento.titulo,
                                            atendimento.intervaloEmDia.toString(),
                                            atendimento.duracaoEmHoras.toString(),
                                            atendimento.dataInicial.toLocaleDateString("pt-BR"), 
                                            atendimento.dataFinal.toLocaleDateString("pt-BR"), 
                                            atendimento.cooperativaResponsavel?.nome ?? "-",
                                            `${atendimento.quantidadeVisitas - atendimento.quantidadeVisitasRealizadas}/${atendimento.quantidadeVisitas}`,
                                            `${atendimento.quantidadeVisitasRealizadas != 0 ? atendimento.quantidadeVisitasCompareceu / atendimento.quantidadeVisitasRealizadas : "-"}`
                                        ]
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
  