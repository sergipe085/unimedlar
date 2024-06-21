import { Button } from "@/app/_components/Button";
import ParallaxScrollView from "@/app/_components/ParallaxScrollView";
import { ThemedText } from "@/app/_components/ThemedText";
import { Agendamento } from "@/data/saude/types/agendamento";
import { Consulta } from "@/data/saude/types/consulta";
import { Exame } from "@/data/saude/types/exame";
import { Remedio } from "@/data/saude/types/remedio";
import { useLocalSearchParams } from "expo-router";
import { Dimensions, View } from "react-native";
import QRCode from 'react-native-qrcode-svg';

export default function DetalhesConsulta() {
    const data = useLocalSearchParams<Consulta>();

    return (
        <ParallaxScrollView>
            <ThemedText type="title">Consultas</ThemedText>

            <View
                style={{
                    width: "100%",
                    alignItems: "center"
                }}
            >

                <ThemedText type="subtitle">{data.nome_unidade_saude}</ThemedText>
            </View>
            <ThemedText type="subtitle">Consulta para {data.nome_cidadao}</ThemedText>
            <ThemedText type="default">Periodo: {data.data_inicio_atendimento} - {data.data_fim_atendimento}</ThemedText>
            <ThemedText type="default">Realizada por: {data.no_prof}</ThemedText>
            {/* <ListModules type="column" modulos={modulos?.submodules}/> */}

            {/* <Button type="default">Confirmar presença</Button> */}
        </ParallaxScrollView>
    )
}