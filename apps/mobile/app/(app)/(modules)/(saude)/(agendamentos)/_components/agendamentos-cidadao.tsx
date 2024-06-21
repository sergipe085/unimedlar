import { TouchableOpacity, View } from "react-native";
import { useAgendamentosCidadao } from "../_api/hooks/useAgendamentosCidadao";
import { ThemedText } from "@/app/_components/ThemedText";
import { Card } from "@/app/_components/Card";
import { Loading } from "@/app/_components/loading";
import { router } from "expo-router";

export function AgendamentosCidadao() {
    const { agendamentos } = useAgendamentosCidadao();

    return (
        <>
            <ThemedText type="subtitle">Seus agendamentos</ThemedText>

            {
                !agendamentos && (
                    <Loading/>
                )
            }

            <View>
                {
                    agendamentos?.map(agendamento => {
                        return (
                            <Card type="outline" style={{ height: 128 }} onPress={() => router.push({
                                pathname: "detalhes-agendamento",
                                params: {
                                    ...agendamento as any
                                }
                            })}>
                                <ThemedText type="subtitle">{ agendamento.ds_procedimento }</ThemedText>
                            </Card>
                        )
                    })
                }
            </View>
        </>
    )
}