import { Subtitle } from "@/app/_components/text/subtitle";
import { Title } from "@/app/_components/text/title";
import { TableBody, TableHeader, TableRow } from "@/components/ui/mytable";
import { getChamados } from "@/data/chamados";
import { getPacientes } from "@/data/pacientes";
import { getUsuarios } from "@/data/usuarios";
import { FilterComponent } from "../../_components/filter";
import { AssuntoChamado, StatusChamado, TipoChamado, UrgenciaChamado } from "@prisma/client";
import { useSearchParams } from "next/navigation";

export default async function Chamados({ searchParams }: any) {
    const assunto = searchParams.assunto;
    const urgencia = searchParams.urgencia;
    const status = searchParams.status;
    const tipo = searchParams.tipo;

    const chamados = await getChamados({
        where: {
            assunto,
            urgencia,
            status,
            tipo
        }
    });
        
    return (
        <div className="w-full">
            <Title>Chamados</Title>
            <Subtitle className="mb-4">Últimos chamados da ouvidoria</Subtitle>
            <FilterComponent filters={[
                {
                    name: "tipo",
                    title: "Tipo",
                    values: Object.values(TipoChamado)
                },
                {
                    name: "assunto",
                    title: "Assunto",
                    values: Object.values(AssuntoChamado)
                },
                {
                    name: "urgencia",
                    title: "Prioridade",
                    values: Object.values(UrgenciaChamado)
                },
                {
                    name: "status",
                    title: "Status",
                    values: Object.values(StatusChamado)
                }
            ]}/>
            <>
                <TableHeader>TIPO,ASSUNTO,URGENCIA,STATUS,RECLAMACAO,REALIZADO EM</TableHeader>
                <TableBody>{
                    chamados.map(chamado => {
                        return <TableRow>
                            {
                                [chamado.tipo,chamado.assunto, chamado.urgencia, chamado.status, chamado.reclamacao, chamado.realizadoEm.toLocaleDateString("pt-BR")]
                            }
                        </TableRow>
                    })
                }</TableBody>
            </>
        </div>
    );
}
  