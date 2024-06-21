import { View } from "react-native";
import { Chamado } from "../_data/types/chamado";
import { ThemedText } from "@/app/_components/ThemedText";
import { Card } from "@/app/_components/Card";

type Props = {
    chamado: Chamado
}

export function ChamadoUnit({ chamado }: Props) {
    return (
        <Card type="outline">
            <ThemedText>{chamado.titulo}</ThemedText>
        </Card>
    )
}