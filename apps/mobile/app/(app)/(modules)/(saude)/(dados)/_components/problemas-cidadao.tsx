import { TouchableOpacity, View } from "react-native";
import { useAgendamentosCidadao } from "../../(agendamentos)/_api/hooks/useAgendamentosCidadao";
import { ThemedText } from "@/app/_components/ThemedText";
import { Card } from "@/app/_components/Card";
import { Loading } from "@/app/_components/loading";
import { router } from "expo-router";
import { useConsultasCidadao } from "../../_api/hooks/useConsultasCidadao";
import { useDadosSaudeCidadao } from "../../_api/hooks/useDadosSaudeCidadao";

export function ProblemasCidadao() {
    const { problemas } = useDadosSaudeCidadao();

    return (
        <>
            <ThemedText type="subtitle">Seus problemas</ThemedText>

            {
                !problemas && (
                    <Loading />
                )
            }

            {problemas?.length > 0 ? <View>
                {
                    problemas?.map(problema => {
                        return (
                            <TouchableOpacity
                                // onPress={() => router.push({
                                //     pathname: "detalhes-problema",
                                //     params: {
                                //         ...problema as any
                                //     }
                                // })}
                            >
                                <Card type="outline" style={{ height: 128 }}>
                                    <ThemedText type="subtitle">{problema?.no_situacao_problema}</ThemedText>
                                    <ThemedText type="subtitle">{problema?.ds_ciap} - {problema?.no_cid10}</ThemedText>
                                </Card>
                            </TouchableOpacity>
                        )
                    })
                }
            </View> : <ThemedText type="default">Nenhum problema encontrado</ThemedText>}
        </>
    )
}