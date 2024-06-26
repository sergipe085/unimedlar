import { Subtitle } from "@/app/_components/text/subtitle";
import { getDetalhesAcompanhamento } from "@/data/acompanhamento";
import AdicionarAtendimentoForm from "../../_components/adicionar-atendimento-form";

type Props = {
    params: {
        id: string;
    }
}

export default async function NovoAtendimento({ params }: Props) {
    const { id } = params;
    const acompanhamento = await getDetalhesAcompanhamento(id);

    if (!acompanhamento) {
        return null;
    }

    const { atendimentos, paciente } = acompanhamento;
        
    return (
        <div className="w-full">
            <AdicionarAtendimentoForm idAcompanhamento={acompanhamento.id}/>
        </div>
    );
}
  