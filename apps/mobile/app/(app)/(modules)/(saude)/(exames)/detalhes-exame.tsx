import { Button } from "@/app/_components/Button";
import ParallaxScrollView from "@/app/_components/ParallaxScrollView";
import { ThemedText } from "@/app/_components/ThemedText";
import { Agendamento } from "@/data/saude/types/agendamento";
import { Exame } from "@/data/saude/types/exame";
import { Remedio } from "@/data/saude/types/remedio";
import { useLocalSearchParams } from "expo-router";
import { Dimensions, View } from "react-native";
import QRCode from 'react-native-qrcode-svg';

export default function DetalhesExame() {
    const data = useLocalSearchParams<Exame>();

    return (
        <ParallaxScrollView>
            <View
                style={{
                    width: "100%",
                    alignItems: "center"
                }}
            >

                <ThemedText type="subtitle">{data.no_cid10}</ThemedText>
            </View>
            <ThemedText type="subtitle">Exame para {data.no_cidadao}</ThemedText>
            <ThemedText type="default">Requisição feita em: {data.dt_requisicao}</ThemedText>
            <ThemedText type="default">Receitado por: {data.no_profissional}</ThemedText>
            {/* <ListModules type="column" modulos={modulos?.submodules}/> */}

            {/* <Button type="default">Confirmar presença</Button> */}
        </ParallaxScrollView>
    )
}