import { Subtitle } from "@/app/_components/text/subtitle";
import AdicionarAtendimentoForm from "../_components/adicionar-atendimento-form";
import { getDetalhesAtendimento } from "@/data/atendimento";

type Props = {
    params: {
        id: string;
    }
}

export default async function NovoAtendimento() {
    
    return (
        <AdicionarAtendimentoForm/>
    );
}
  