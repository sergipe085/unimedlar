import ParallaxScrollView from "@/app/_components/ParallaxScrollView";
import { ThemedText } from "@/app/_components/ThemedText";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { Colors } from "@/constants/Colors";
import { formatDateString } from "@/utils/dates";
import { Detalhes } from "../../_api/useVisitas";

export default function DetalhesVisitas() {
    const data = useLocalSearchParams<Detalhes>();
    // const detalhes: Detalhes = null;

    // const { detalhes } = useDetalhes(data)

    // console.log(detalhes)

    return (
        <ParallaxScrollView>
            <View
                style={{
                    width: "100%",
                    alignItems: "center"
                }}
            >

                <ThemedText style={{color: Colors.unimedColors.laranja}} type="subtitle">
                    Visita - {data?.turno}
                </ThemedText>
            </View>
            <ThemedText type="subtitle">Data e turno</ThemedText>
            <ThemedText type="default">{formatDateString(data.dataVisita)}, {data.turno}</ThemedText>
            <ThemedText type="default">Procedimentos</ThemedText>
            {
                data?.atendimento?.procedimentos?.map(procedimento => {
                    return (
                        <>
                            <ThemedText>{procedimento.procedimento.nome}</ThemedText>
                        </>
                    )
                })
            }
            <ThemedText type="default">Medicamentos</ThemedText>
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