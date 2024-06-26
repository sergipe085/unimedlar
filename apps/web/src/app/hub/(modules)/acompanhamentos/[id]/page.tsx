import { Subtitle } from "@/app/_components/text/subtitle";
import { getDetalhesAcompanhamento } from "@/data/acompanhamento";
import AdicionarAtendimentoForm from "../_components/adicionar-atendimento-form";
import Link from "next/link";
import { TitleWithAction } from "@/app/_components/title-with-action";
import { Title } from "@/app/_components/text/title";

type Props = {
    params: {
        id: string;
    }
}

export default async function DetalhesAcompanhamento({ params }: Props) {
    const { id } = params;
    const acompanhamento = await getDetalhesAcompanhamento(id);

    if (!acompanhamento) {
        return null;
    }

    const { atendimentos, paciente } = acompanhamento;
        
    return (
        <div className="w-full">
            <Title>Acompanhamento de {paciente.nome}</Title>
            <Subtitle className="my-8">Dados do paciente</Subtitle>
            <Subtitle>Nome: { paciente.nome }</Subtitle>
            <Subtitle>CNS: { paciente.cns }</Subtitle>
            <Subtitle>CPF: { paciente.cpf }</Subtitle>
            <Subtitle>CUIDADOR: { paciente.cuidador?.usuario?.nome }</Subtitle>
            <Link href={`/hub/acompanhamentos/${id}/novo-atendimento`}>Novo atendimento</Link>
            {/* <AdicionarAtendimentoForm idAcompanhamento={acompanhamento.id}/> */}
        </div>
    );
}
  