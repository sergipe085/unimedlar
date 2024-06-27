import { Subtitle } from "@/app/_components/text/subtitle";
import AdicionarAtendimentoForm from "../_components/adicionar-atendimento-form";
import Link from "next/link";
import { TitleWithAction } from "@/app/_components/title-with-action";
import { Title } from "@/app/_components/text/title";
import { getDetalhesAtendimento } from "@/data/atendimento";

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
            <Subtitle className="my-8">Dados do paciente</Subtitle>
            <Subtitle>Nome: { paciente.nome }</Subtitle>
            <Subtitle>CNS: { paciente.cns }</Subtitle>
            <Subtitle>CPF: { paciente.cpf }</Subtitle>
            <Subtitle>CUIDADOR: { paciente.cuidador?.usuario?.nome }</Subtitle>
            <Link href={`/hub/atendimentos/${id}/novo-atendimento`}>Novo atendimento</Link>
            {/* <AdicionarAtendimentoForm idAcompanhamento={acompanhamento.id}/> */}
        </div>
    );
}
  