import { formatDateString } from "@/utils/dates"
import { ThemedText } from "./ThemedText"
import { ThemedView } from "./ThemedView"
import { Colors } from "@/constants/Colors"
import { useDetalhes } from "../(app)/(modules)/_api/useVisitas"
import { CardVisita } from "./CardVisita"
import { View } from "react-native"

export default function DetalhesVisita({visitaSelecionada, abrir, setCompareceu}) {

    // const { detalhes } = useDetalhes(visitaSelecionada)

    return (
        <View >
        <CardVisita visitaSelecionada={visitaSelecionada} abrir={abrir} setCompareceu={setCompareceu}  />
            {/* <ThemedView style={{ display: 'flex', gap: 10 }}>
                <ThemedView>
                    <ThemedText style={{ color: Colors.unimedColors.laranja }}>Visita</ThemedText>
                    <ThemedText>Atendimento: {detalhes?.atendimento?.titulo}</ThemedText>
                    <ThemedText>Data: {formatDateString(detalhes?.dataVisita)}, {detalhes?.turno}</ThemedText>
                </ThemedView>
                <ThemedView>
                    <ThemedText style={{ color: Colors.unimedColors.laranja }}>Profissionais</ThemedText>
                    {
                        detalhes?.atendimento?.profissionaisNecessarios?.map((prof, index) => {
                            return (
                                <>
                                    <ThemedText>{index + 1}. {prof}</ThemedText>
                                </>
                            )
                        })
                    }

                </ThemedView>
                <ThemedView>
                    <ThemedText style={{ color: Colors.unimedColors.laranja }}>Duração estimada</ThemedText>
                    <ThemedText >{detalhes?.atendimento?.duracaoEmHoras} hora(s)</ThemedText>
                </ThemedView>
                <ThemedView>
                    <ThemedText style={{ color: Colors.unimedColors.laranja }}>Procedimentos</ThemedText>
                    {
                        detalhes?.atendimento?.procedimentos?.map((procedimento, index) => {
                            return (
                                <>
                                    {procedimento.procedimento?.nome && <ThemedText>{index + 1}. {procedimento.procedimento?.nome} | {procedimento?.duracaoEmHoras} hora(s)</ThemedText>}
                                </>
                            )
                        })
                    }
                </ThemedView>
                <ThemedView>
                    <ThemedText style={{ color: Colors.unimedColors.laranja }}>Medicamentos</ThemedText>
                    {
                        detalhes?.atendimento?.procedimentos?.map((procedimento, index) => {
                            return (
                                <>
                                    {procedimento.medicamento?.nome && <ThemedText>{index + 1}. {procedimento.medicamento?.nome} | {procedimento?.duracaoEmHoras} hora(s)</ThemedText>}
                                </>
                            )
                        })
                    }

                </ThemedView>
            </ThemedView> */}
        </View >
    )
}