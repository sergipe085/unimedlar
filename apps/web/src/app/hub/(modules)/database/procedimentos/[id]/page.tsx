import { Subtitle } from "@/app/_components/text/subtitle";
import { Title } from "@/app/_components/text/title";
import { Table, TableBody, TableHeader, TableRow } from "@/components/ui/mytable";
import { getProcedimentoById } from "@/data/procedimentos";

type Props = {
    params: {
        id: string;
    }
}

export default async function DetalhesProcedimento({ params }: Props) {
    const { id } = params;
    const procedimento = await getProcedimentoById(id);

    return (
        <>
            <Title>{ procedimento?.nome }</Title>
            <div className="mt-4">
                <Subtitle>Materiais necessários</Subtitle>
                <div>
                    <TableHeader>
                        NOME,VALOR
                    </TableHeader>
                    <TableBody>
                        <></>
                        {
                            procedimento?.materiais?.map(material => {
                                return (
                                    <TableRow>
                                        {
                                            [material.procedimentoId, material.quantidadeDeMaterial.toString()]
                                        }
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </div>
            </div>
            {
                JSON.stringify(procedimento)
            }
        </>
    )
}