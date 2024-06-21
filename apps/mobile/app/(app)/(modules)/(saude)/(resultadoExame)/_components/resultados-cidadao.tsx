import { TouchableOpacity, View } from "react-native";
import { useAgendamentosCidadao } from "../../(agendamentos)/_api/hooks/useAgendamentosCidadao";
import { ThemedText } from "@/app/_components/ThemedText";
import { Card } from "@/app/_components/Card";
import { Loading } from "@/app/_components/loading";
import { router } from "expo-router";
import { useResultadoExamesCidadao } from "../../_api/hooks/useResultadoExamesCidadao";

export function ResultadoExamesCidadao() {
    const { resultadosExame } = useResultadoExamesCidadao();

    return (
        <>
            <ThemedText type="subtitle">Seus resultados</ThemedText>

            {
                !resultadosExame && (
                    <Loading />
                )
            }

            {resultadosExame?.length > 0 ? <View>
                {
                    resultadosExame?.map(resultado => {
                        return (
                            <TouchableOpacity
                                key={resultado.co_cidadao}
                                onPress={() => router.push({
                                    pathname: "detalhes-resultado",
                                    params: {
                                        ...resultado as any
                                    }
                                })}
                            >
                                <Card type="outline" style={{ height: 128 }}>
                                    <ThemedText type="subtitle">Nome do procedimento: {resultado.no_proced}</ThemedText>
                                    <ThemedText type="subtitle">Realizado em: {resultado.data_realizacao_exame}</ThemedText>
                                </Card>
                            </TouchableOpacity>
                        )
                    })
                }
            </View> : <ThemedText type="subtitle">Nenhum exame encontrado</ThemedText>}
        </>
    )
}