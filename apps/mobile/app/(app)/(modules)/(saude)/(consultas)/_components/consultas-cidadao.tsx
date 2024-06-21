import { TouchableOpacity, View } from "react-native";
import { useAgendamentosCidadao } from "../../(agendamentos)/_api/hooks/useAgendamentosCidadao";
import { ThemedText } from "@/app/_components/ThemedText";
import { Card } from "@/app/_components/Card";
import { Loading } from "@/app/_components/loading";
import { router } from "expo-router";
import { useConsultasCidadao } from "../../_api/hooks/useConsultasCidadao";

export function ConsultasCidadao() {
    const { consultas } = useConsultasCidadao();

    return (
        <>
            <ThemedText type="subtitle">Suas consultas</ThemedText>

            {
                !consultas && (
                    <Loading />
                )
            }

            {consultas?.length > 0 ? <View>
                {
                    consultas?.map(consulta => {
                        return (
                            <TouchableOpacity
                                onPress={() => router.push({
                                    pathname: "detalhes-consulta",
                                    params: {
                                        ...consulta as any
                                    }
                                })}
                            >
                                <Card type="outline" style={{ height: 128 }}>
                                    <ThemedText type="subtitle">{consulta?.no_profissional ?? 'Profissional não identificado'}</ThemedText>
                                    <ThemedText type="subtitle">{consulta?.data_consulta}</ThemedText>
                                    <ThemedText type="subtitle">{consulta?.ds_avaliacao}</ThemedText>
                                </Card>
                            </TouchableOpacity>
                        )
                    })
                }
            </View> : <ThemedText type="subtitle">Nenhuma consulta encontrada</ThemedText>}
        </>
    )
}