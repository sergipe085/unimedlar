import { Subtitle } from "@/app/_components/text/subtitle";
import { Title } from "@/app/_components/text/title";
import { TableBody, TableHeader, TableRow } from "@/components/ui/mytable";
import { getProcedimentos } from "@/data/procedimentos";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default async function DBProcedimentos() {
    const procedimentos = await getProcedimentos();

    return (
        <>
            <Title>Procedimentos</Title>
            <Subtitle>procedimentos cadastrados no sistema</Subtitle>

            <div className="w-full mt-4">
                <TableHeader>NOME,VALOR,QUANTIDADE DE MATERIAIS</TableHeader>
                <TableBody>{
                    procedimentos.map(procedimento => {
                        return (
                            <Link href={`/hub/database/procedimentos/${procedimento.id}`}>
                                <TableRow key={procedimento.id}>
                                    {
                                        [procedimento.nome, procedimento.valor.toString(), procedimento.materiais.length.toString()]
                                    }
                                </TableRow>
                            </Link>
                        )
                    })
                }</TableBody>
            </div>
        </>
    );
}
  