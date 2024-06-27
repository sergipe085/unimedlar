import { Button } from "@/app/_components/Button";
import ParallaxScrollView from "@/app/_components/ParallaxScrollView";
import { ThemedText } from "@/app/_components/ThemedText";
import { Agendamento } from "@/data/saude/types/agendamento";
import { Exame } from "@/data/saude/types/exame";
import { Remedio } from "@/data/saude/types/remedio";
import { useLocalSearchParams } from "expo-router";
import { Dimensions, View } from "react-native";
import QRCode from 'react-native-qrcode-svg';
import { Visita } from "../(modules)/api/interface/visitas";
import { formatDateString } from "@/utils/dates";

export default function DetalhesVisita() {
    const data = useLocalSearchParams<any>();

    return (
        <ParallaxScrollView>
            <ThemedText>Visita para: {data?.atendimento?.acompanhamento?.paciente?.nome}</ThemedText>
            <ThemedText>Ocorreu em: {formatDateString(data?.dataVisita)} hora(s)</ThemedText>
            <ThemedText>{data?.atendimento?.titulo}</ThemedText>
            <ThemedText>Duração: {data?.atendimento?.duracaoEmHoras} hora(s)</ThemedText>
            <ThemedText>Periodo: {data?.atendimento?.acompanhamento?.dataInicial} - {data?.atendimento?.acompanhamento?.dataInicial} </ThemedText>
        </ParallaxScrollView>
    )
}