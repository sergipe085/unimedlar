import { Subtitle } from "@/app/_components/text/subtitle";
import { Title } from "@/app/_components/text/title";
import { TableBody, TableHeader, TableRow } from "@/components/ui/table";
import { getAcompanhamentos } from "@/data/acompanhamento";
import Link from "next/link";
import { RedirectType, redirect } from "next/navigation";

export default async function Acompanhamentos() {
    const acompanhamentos = await getAcompanhamentos();
        
    return (
        <div className="w-full">
            <Title>Acompanhamentos</Title>
            <Subtitle className="mb-4">Acompanhamentos do Unimed Lar</Subtitle>
            <>
                <TableHeader>DATA INICIAL,DATA FINAL,DURACAO,PROFISSIONAIS NECESSÁRIOS</TableHeader>
                <TableBody>{
                    acompanhamentos.map(acompanhamento => {
                        return (
                            <Link href={`/hub/acompanhamentos/${acompanhamento.id}`}>
                                <TableRow key={acompanhamento.id} onClick={() => console.log("teste")}>
                                    {
                                        [acompanhamento.dataInicial.toLocaleDateString("pt-BR"), acompanhamento.dataFinal.toLocaleDateString("pt-BR"), acompanhamento.dataInicial.toLocaleDateString("pt-BR"), acompanhamento.tiposProfissionais.toString()]
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
  