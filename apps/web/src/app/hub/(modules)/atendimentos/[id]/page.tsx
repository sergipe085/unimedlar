import { Subtitle } from "@/app/_components/text/subtitle";
import AdicionarAtendimentoForm from "../_components/adicionar-atendimento-form";
import Link from "next/link";
import { TitleWithAction } from "@/app/_components/title-with-action";
import { Title } from "@/app/_components/text/title";
import { getDetalhesAtendimento } from "@/data/atendimento";
import { TableBody, TableHeader, TableRow } from "@/components/ui/mytable";

type Props = {
    params: {
        id: string;
    }
}

export default async function DetalhesAtendimento({ params }: Props) {
    const { id } = params;
    const atendimento = await getDetalhesAtendimento(id);

    if (!atendimento) {
        return null;
    }

    const { paciente } = atendimento;
        
    return (
        <div className="w-full">
            
            <Title>Atendimento de {paciente.nome}</Title>
            <Subtitle>{ atendimento.titulo }</Subtitle>
            <Subtitle className="my-8 mb-4">Dados do paciente</Subtitle>
            <Subtitle>Nome: { paciente.nome }</Subtitle>
            <Subtitle>CNS: { paciente.cns }</Subtitle>
            <Subtitle>CPF: { paciente.cpf }</Subtitle>
            <Subtitle>CUIDADOR: { paciente.cuidador?.usuario?.nome }</Subtitle>
            <Subtitle className="my-8 mb-4">Etapas do Atendimento</Subtitle>
            <div>
                <TableHeader>
                    ETAPA,TIPO,NOME,QUANTIDADE,DURAÇÃO
                </TableHeader>
                <TableBody>
                    {
                        atendimento.procedimentos?.map((proced, index) => {
                            const tipo = proced.procedimento ? "PROCEDIMENTO" : "MEDICACAO";
                            const nome = proced.procedimento ? proced.procedimento.nome : proced.medicamento?.nome ?? "-";
                            return (
                                <TableRow>
                                    {
                                        [(index + 1).toString(), tipo, nome, proced.quantidade.toString(), proced.duracaoEmHoras.toString() + "h"]
                                    }
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </div>
            {/* <AdicionarAtendimentoForm idAcompanhamento={acompanhamento.id}/> */}
        </div>
    );
}
  