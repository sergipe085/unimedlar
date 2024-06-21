import { ActionsContainer } from "@/app/_components/ActionsContainer";
import { Input } from "@/app/_components/Input";
import { ChevronRight } from "lucide-react-native";
import { useState } from "react";

type Data = {
    title: string;
    description: string;
}
type Props = {
    onContinue(data: Data);
}

export function CriarChamadaEtapaInicial({ onContinue }: Props) {
    const [data, setData] = useState<Data>();

    return (
        <>
            <ActionsContainer actions={[
            {
                action: async () => onContinue(data),
                icon: ChevronRight,
                type: "full",
                title: "Continuar"
            }
        ]}/>
            <Input placeholder='Secretaria'/>
            <Input placeholder='Descreva o problema'/>
        </>
    )
}