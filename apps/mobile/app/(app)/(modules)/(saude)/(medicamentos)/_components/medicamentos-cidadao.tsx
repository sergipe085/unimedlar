import { TouchableOpacity, View } from "react-native";
import { useAgendamentosCidadao } from "../../(agendamentos)/_api/hooks/useAgendamentosCidadao";
import { ThemedText } from "@/app/_components/ThemedText";
import { Card } from "@/app/_components/Card";
import { Loading } from "@/app/_components/loading";
import { router } from "expo-router";
import { useMedicamentosCidadao } from "../../_api/hooks/useMedicamentosCidadao";

export function MedicamentosCidadao() {
    const { medicamentos } = useMedicamentosCidadao();

    return (
        <>
            <ThemedText type="subtitle">Seus medicamentos</ThemedText>

            {
                !medicamentos && (
                    <Loading/>
                )
            }

            <View>
                {
                    medicamentos?.map(medicamento => {
                        return (
                            <TouchableOpacity
                                onPress={() => router.push({
                                    pathname: "detalhes-medicamento",
                                    params: {
                                        ...medicamento as any
                                    }
                                })}
                            >
                                <Card type="outline" style={{ height: 128 }}>
                                    <ThemedText type="subtitle">{ medicamento.no_posologia }</ThemedText>
                                    <ThemedText type="subtitle">{ medicamento.ds_dose }</ThemedText>
                                    <ThemedText type="subtitle">{ medicamento.ds_concentracao }</ThemedText>
                                </Card>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </>
    )
}