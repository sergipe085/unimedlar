import { TouchableOpacity, View } from "react-native";
import { useAgendamentosCidadao } from "../../(agendamentos)/_api/hooks/useAgendamentosCidadao";
import { ThemedText } from "@/app/_components/ThemedText";
import { Card } from "@/app/_components/Card";
import { Loading } from "@/app/_components/loading";
import { router } from "expo-router";
import { useEncaminhamentosCidadao } from "../../_api/hooks/useEncaminhamentos";

export function EncaminhamentosCidadao() {
    const { encaminhamentos } = useEncaminhamentosCidadao();

    return (
        <>
            <ThemedText type="subtitle">Seus encaminhamentos</ThemedText>

            {
                !encaminhamentos && (
                    <Loading />
                )
            }

            {encaminhamentos?.length > 0 ? <View>
                {
                    encaminhamentos?.map(exame => {
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
                                    <ThemedText type="default">{exame.no_classificacao_risco_encam}</ThemedText>
                                    <ThemedText type="subtitle">{exame.ds_procedimento}</ThemedText>
                                    <ThemedText type="default">{exame.no_situacao_encaminhamento}</ThemedText>
                                </Card>
                            </TouchableOpacity>
                        )
                    })
                }
            </View> : <ThemedText type="subtitle">Nenhum encaminhamento encontrado</ThemedText>}
        </>
    )
}