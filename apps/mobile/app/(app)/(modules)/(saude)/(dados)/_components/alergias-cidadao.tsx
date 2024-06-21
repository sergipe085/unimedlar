import { TouchableOpacity, View } from "react-native";
import { useAgendamentosCidadao } from "../../(agendamentos)/_api/hooks/useAgendamentosCidadao";
import { ThemedText } from "@/app/_components/ThemedText";
import { Card } from "@/app/_components/Card";
import { Loading } from "@/app/_components/loading";
import { router } from "expo-router";
import { useConsultasCidadao } from "../../_api/hooks/useConsultasCidadao";
import { useDadosSaudeCidadao } from "../../_api/hooks/useDadosSaudeCidadao";

export function AlergiasCidadao() {
    const { alergias } = useDadosSaudeCidadao();

    return (
        <>
            <ThemedText type="subtitle">Suas alergias</ThemedText>

            {
                !alergias && (
                    <Loading />
                )
            }

            {alergias?.length > 0 ? <View>
                {
                    alergias?.map(alergia => {
                        return (
                            <TouchableOpacity
                                // onPress={() => router.push({
                                //     pathname: "detalhes-alergia",
                                //     params: {
                                //         ...alergia as any
                                //     }
                                // })}
                            >
                                <Card type="outline" style={{ height: 128 }}>
                                    <ThemedText type="subtitle">{alergia?.no_categ_substancia_alergia }</ThemedText>
                                    <ThemedText type="subtitle">{alergia?.no_criticidade_alergia}</ThemedText>
                                </Card>
                            </TouchableOpacity>
                        )
                    })
                }
            </View> : <ThemedText type="default">Nenhuma alergia encontrada</ThemedText>}
        </>
    )
}