import { Button } from "@/app/_components/Button";
import ParallaxScrollView from "@/app/_components/ParallaxScrollView";
import { ThemedText } from "@/app/_components/ThemedText";
import { Agendamento } from "@/data/saude/types/agendamento";
import { Encaminhamento } from "@/data/saude/types/encaminhamento";
import { Exame } from "@/data/saude/types/exame";
import { Remedio } from "@/data/saude/types/remedio";
import { useLocalSearchParams } from "expo-router";
import { Dimensions, View } from "react-native";
import QRCode from 'react-native-qrcode-svg';

export default function DetalhesExame() {
    const data = useLocalSearchParams<Encaminhamento>();

    return (
        <ParallaxScrollView>
            <View
                style={{
                    width: "100%",
                    alignItems: "center"
                }}
            >

                <ThemedText type="subtitle">Data do encaminhamento: {data.dt_encaminhamento}</ThemedText>
            </View>
            <ThemedText type="subtitle">Encaminhamento para {data.no_cidadao}</ThemedText>
            <ThemedText type="default">Motivo: {data.motivo_encaminhamento}</ThemedText>
            <ThemedText type="default">Observação: {data.observacao_encaminhamento}</ThemedText>
            <ThemedText type="default">Receitado por: {data.no_profissional}</ThemedText>
            {/* <ListModules type="column" modulos={modulos?.submodules}/> */}

            {/* <Button type="default">Confirmar presença</Button> */}
        </ParallaxScrollView>
    )
}