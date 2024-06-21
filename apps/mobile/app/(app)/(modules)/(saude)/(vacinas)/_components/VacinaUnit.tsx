import { Card } from "@/app/_components/Card";
import { ThemedText } from "@/app/_components/ThemedText";
import { Vacina } from "@/data/saude/types/vacina";
import { formatDateString } from "@/utils/dates";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";

type Props = {
    vacina: Vacina
}

export function VacinaUnit({ vacina }: Props) {
    return (
        <Card 
            type="outline"
            style={{ height: 128 }}
            onPress={() => router.replace({
                pathname: "detalhes-vacina",
                params: {
                    ...vacina
                }
            })}
        >
            <ThemedText type="default">{ vacina.no_apresentacao_dose }</ThemedText>
            <ThemedText type="subtitle">{ vacina.no_imunobiologico }</ThemedText>
            <ThemedText type="subtitle">{ formatDateString(vacina.data_aplicacao) }</ThemedText>
        </Card>
    )
}