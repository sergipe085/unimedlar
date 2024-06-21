import { Button } from "@/app/_components/Button";
import ParallaxScrollView from "@/app/_components/ParallaxScrollView";
import { ThemedText } from "@/app/_components/ThemedText";
import { Field } from "@/app/_components/field";
import { Agendamento } from "@/data/saude/types/agendamento";
import { Remedio } from "@/data/saude/types/remedio";
import { Vacina } from "@/data/saude/types/vacina";
import { formatDateString } from "@/utils/dates";
import { globals } from "@/utils/globals";
import { useLocalSearchParams } from "expo-router";
import { Dimensions, View } from "react-native";
import QRCode from 'react-native-qrcode-svg';

export default function DetalhesMedicamento() {
    const data = useLocalSearchParams<Vacina>();

    return (
        <ParallaxScrollView>
            <ThemedText type="title">Aplicação de vacina</ThemedText>
            <ThemedText type="subtitle">{ data.no_imunobiologico }</ThemedText>
            <Field children={["Dose", data.no_apresentacao_dose]}/>
            <Field children={["Fabricante", data.no_fabricante]}/>
            <Field children={["Lote", data.no_lote]}/>
            <Field children={["Aplicada em", formatDateString(data.data_aplicacao)]}/>
            <Field children={["Aplicada por", data.no_profissional]}/>
            <Field children={["Aplicada na", data.no_unidade_saude]}/>
        </ParallaxScrollView>
    )
}