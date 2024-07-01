import ParallaxScrollView from "@/app/_components/ParallaxScrollView";
import { ThemedText } from "@/app/_components/ThemedText";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { Colors } from "@/constants/Colors";
import { formatDateString } from "@/utils/dates";
import { Detalhes } from "./_api/useVisitas";
// import { Detalhes } from "../../_api/useVisitas";

export default function DetalhesVisitas() {
    const data = useLocalSearchParams<Detalhes>();
    // const detalhes: Detalhes = null;

    // const { detalhes } = useDetalhes(data)

    console.log(data)

    return (
        <ParallaxScrollView>
            <View
                style={{
                    width: "100%",
                    alignItems: "center"
                }}
            >

                <ThemedText style={{ color: Colors.unimedColors.laranja, fontWeight: 700 }} type="subtitle">
                    Visita - Ventilação mecânica
                </ThemedText>
            </View>
            <ThemedText style={{ color: Colors.unimedColors.laranja }} type="subtitle">Data e turno</ThemedText>
            <ThemedText type="default">{formatDateString(data.dataVisita)}, {data.turno}</ThemedText>
            <ThemedText style={{ color: Colors.unimedColors.laranja }} type="default">Duração estimada</ThemedText>
            <ThemedText type="default">2 hora (s)</ThemedText>
            <ThemedText style={{ color: Colors.unimedColors.laranja }} type="default">Profissionais necessarios</ThemedText>
            <ThemedText type="default">1. Enfermeiro</ThemedText>
            <ThemedText type="default">2. Medico</ThemedText>
            {
                data?.atendimento?.procedimentos?.map(procedimento => {
                    return (
                        <>
                            <ThemedText>{procedimento.procedimento.nome}</ThemedText>
                        </>
                    )
                })
            }
            <ThemedText style={{ color: Colors.unimedColors.laranja }} type="default">Procedimentos</ThemedText>
            <ThemedText type="default">1. Ventilação mecânica | 2 hora (s)</ThemedText>
            {
                data?.atendimento?.procedimentos?.map(procedimento => {
                    return (
                        <>
                            <ThemedText>{procedimento.procedimento.nome}</ThemedText>
                        </>
                    )
                })
            }
            <ThemedText style={{ color: Colors.unimedColors.laranja }} type="default">Medicamentos</ThemedText>
            <ThemedText type="default">2. Dipirona | 2 hora (s)</ThemedText>

            {
                data?.atendimento?.procedimentos?.map(procedimento => {
                    return (
                        <>
                            <ThemedText>{procedimento.medicamento.nome}</ThemedText>
                        </>
                    )
                })
            }
            {/* <ListModules type="column" modulos={modulos?.submodules}/> */}

            {/* <Button type="default">Confirmar presença</Button> */}
        </ParallaxScrollView>
    )
}