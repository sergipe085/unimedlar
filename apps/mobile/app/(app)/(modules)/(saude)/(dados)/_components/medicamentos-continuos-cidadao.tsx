import { TouchableOpacity, View } from "react-native";
import { useAgendamentosCidadao } from "../../(agendamentos)/_api/hooks/useAgendamentosCidadao";
import { ThemedText } from "@/app/_components/ThemedText";
import { Card } from "@/app/_components/Card";
import { Loading } from "@/app/_components/loading";
import { router } from "expo-router";
import { useConsultasCidadao } from "../../_api/hooks/useConsultasCidadao";
import { useDadosSaudeCidadao } from "../../_api/hooks/useDadosSaudeCidadao";

export function MedicamentosUsoContinuoCidadao() {
    const { medicamentos } = useDadosSaudeCidadao();

    return (
        <>
            <ThemedText type="subtitle">Seus medicamentos de uso continuo</ThemedText>

            {
                !medicamentos && (
                    <Loading />
                )
            }

            {medicamentos?.length > 0 ? <View>
                {
                    medicamentos?.map(medicamento => {
                        return (
                            <TouchableOpacity
                                // onPress={() => router.push({
                                //     pathname: "detalhes-medicamento",
                                //     params: {
                                //         ...medicamento as any
                                //     }
                                // })}
                            >
                                <Card type="outline" style={{ height: 128 }}>
                                    <ThemedText type="subtitle">{medicamento?.no_posologia }</ThemedText>
                                    <ThemedText type="subtitle">{medicamento?.qt_receitada}</ThemedText>
                                    <ThemedText type="subtitle">{medicamento?.ds_concentracao}</ThemedText>
                                </Card>
                            </TouchableOpacity>
                        )
                    })
                }
            </View> : <ThemedText type="default">Nenhum medicamento de uso continuo encontrado</ThemedText>}
        </>
    )
}