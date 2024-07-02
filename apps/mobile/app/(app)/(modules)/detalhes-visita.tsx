import ParallaxScrollView from "@/app/_components/ParallaxScrollView";
import { ThemedText } from "@/app/_components/ThemedText";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { Colors } from "@/constants/Colors";
import { formatDateString } from "@/utils/dates";
import { Detalhes, useDetalhes } from "./_api/useVisitas";
import { useEffect } from "react";
// import { Detalhes } from "../../_api/useVisitas";

export default function DetalhesVisitas() {
    const data = useLocalSearchParams<Detalhes>();
    const detalhes = useDetalhes(data.id);

    console.log(detalhes)

    useEffect(() => {
        console.log(data)
    }, [data])
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
                    Visita - {detalhes?.detalhes?.atendimento?.titulo}
                </ThemedText>
            </View>
            {/* <ThemedText>{JSON.stringify(detalhes)}</ThemedText> */}
            <ThemedText style={{ color: Colors.unimedColors.laranja }} type="subtitle">Data e turno</ThemedText>
            <ThemedText type="default">{formatDateString(detalhes.detalhes?.dataVisita)}, {detalhes.detalhes?.turno}</ThemedText>
            <ThemedText style={{ color: Colors.unimedColors.laranja }} type="default">Duração estimada</ThemedText>
            <ThemedText type="default">{detalhes.detalhes?.atendimento.duracaoEmHoras} hora(s)</ThemedText>
            <ThemedText style={{ color: Colors.unimedColors.laranja }} type="default">Profissionais necessarios</ThemedText>
            {
                detalhes.detalhes?.atendimento?.profissionaisNecessarios?.map((prof, index) => {
                    return (
                        <>
                            <ThemedText>{index + 1}. {prof}</ThemedText>
                        </>
                    )
                })
            }
            <ThemedText style={{ color: Colors.unimedColors.laranja }} type="default">Procedimentos</ThemedText>
            {
                detalhes.detalhes?.atendimento?.procedimentos?.map(procedimento => {
                    return (
                        <>
                            {procedimento.procedimento?.nome && <ThemedText>{procedimento.procedimento?.nome} | {procedimento.duracaoEmHoras} hora(s)</ThemedText>}
                        </>
                    )
                })
            }
            <ThemedText style={{ color: Colors.unimedColors.laranja }} type="default">Medicamentos</ThemedText>

            {
                detalhes.detalhes?.atendimento?.procedimentos?.map(procedimento => {
                    return (
                        <>
                            {procedimento.medicamento?.nome && <ThemedText>{procedimento.medicamento?.nome} | {procedimento.duracaoEmHoras} hora(s)</ThemedText>}
                        </>
                    )
                })
            }
            {/* <ListModules type="column" modulos={modulos?.submodules}/> */}

            {/* <Button type="default">Confirmar presença</Button> */}
        </ParallaxScrollView>
    )
}