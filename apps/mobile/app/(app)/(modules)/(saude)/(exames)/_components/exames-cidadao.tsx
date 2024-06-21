import { TouchableOpacity, View } from "react-native";
import { useAgendamentosCidadao } from "../../(agendamentos)/_api/hooks/useAgendamentosCidadao";
import { ThemedText } from "@/app/_components/ThemedText";
import { Card } from "@/app/_components/Card";
import { Loading } from "@/app/_components/loading";
import { router } from "expo-router";
import { useExamesCidadao } from "../../_api/hooks/useExamesCidadao";

export function ExamesCidadao() {
    const { exames } = useExamesCidadao();

    return (
        <>
            <ThemedText type="subtitle">Seus exames</ThemedText>

            {
                !exames && (
                    <Loading />
                )
            }

            {exames?.length > 0 ? <View>
                {
                    exames?.map(exame => {
                        return (
                            <TouchableOpacity
                                onPress={() => router.push({
                                    pathname: "detalhes-exame",
                                    params: {
                                        ...exame as any
                                    }
                                })}
                            >
                                <Card type="outline" style={{ height: 128 }}>
                                    <ThemedText type="subtitle">{exame.no_cid10}</ThemedText>
                                    <ThemedText type="subtitle">{exame.dt_requisicao}</ThemedText>
                                </Card>
                            </TouchableOpacity>
                        )
                    })
                }
            </View> : <ThemedText type="subtitle">Nenhum exame encontrado</ThemedText>}
        </>
    )
}