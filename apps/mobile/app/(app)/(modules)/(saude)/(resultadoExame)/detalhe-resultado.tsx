import { Button } from "@/app/_components/Button";
import ParallaxScrollView from "@/app/_components/ParallaxScrollView";
import { ThemedText } from "@/app/_components/ThemedText";
import { Agendamento } from "@/data/saude/types/agendamento";
import { Exame } from "@/data/saude/types/exame";
import { Remedio } from "@/data/saude/types/remedio";
import { useLocalSearchParams } from "expo-router";
import { Dimensions, View } from "react-native";
import QRCode from 'react-native-qrcode-svg';
import { ResultadoExame } from "../_api/types/resultadoExame";

export default function DetalhesResultado() {
    const data = useLocalSearchParams<ResultadoExame>();

    return (
        <ParallaxScrollView>
            <View
                style={{
                    width: "100%",
                    alignItems: "center"
                }}
            >

                <ThemedText type="subtitle">{data.no_proced}</ThemedText>
            </View>
            <ThemedText type="subtitle">Realizado em {data.data_realizacao_exame}</ThemedText>
            <ThemedText type="default">Observação: {data.ds_observacao}</ThemedText>
            <ThemedText type="default">Descrição: {data.ds_resultado}</ThemedText>
            {/* <ListModules type="column" modulos={modulos?.submodules}/> */}

            {/* <Button type="default">Confirmar presença</Button> */}
        </ParallaxScrollView>
    )
}