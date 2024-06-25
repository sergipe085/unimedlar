import { Subtitle } from "@/app/_components/text/subtitle";
import { getDetalhesAcompanhamento } from "@/data/acompanhamento";

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
            <Subtitle className="mb-4">Acompanhamentos do Unimed Lar {id}</Subtitle>
            <Subtitle className="my-8">Dados do paciente</Subtitle>
            <Subtitle>Nome: { paciente.nome }</Subtitle>
            <Subtitle>CNS: { paciente.cns }</Subtitle>
            <Subtitle>CPF: { paciente.cpf }</Subtitle>
            <Subtitle>CUIDADOR: { paciente.cuidador?.usuario?.nome }</Subtitle>
            <Subtitle className="my-8">Dados do paciente</Subtitle>
            <Subtitle>Nome: { paciente.nome }</Subtitle>
            <Subtitle>CNS: { paciente.cns }</Subtitle>
            <Subtitle>CPF: { paciente.cpf }</Subtitle>
            <Subtitle>CUIDADOR: { paciente.cuidador?.usuario?.nome }</Subtitle>
        </div>
    );
}
  