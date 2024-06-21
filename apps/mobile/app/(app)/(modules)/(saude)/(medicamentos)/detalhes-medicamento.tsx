import { Button } from "@/app/_components/Button";
import ParallaxScrollView from "@/app/_components/ParallaxScrollView";
import { ThemedText } from "@/app/_components/ThemedText";
import { Agendamento } from "@/data/saude/types/agendamento";
import { Remedio } from "@/data/saude/types/remedio";
import { useLocalSearchParams } from "expo-router";
import { Dimensions, View } from "react-native";
import QRCode from 'react-native-qrcode-svg';

export default function DetalhesMedicamento() {
    const data = useLocalSearchParams<Remedio>();

    return (
        <ParallaxScrollView>
            <View
                style={{
                    width: "100%",
                    alignItems: "center"
                }}
            >
 
                <ThemedText type="subtitle">{ data.no_posologia }</ThemedText>
            </View>
            <ThemedText type="subtitle">Medicamento para { data.no_cidadao }</ThemedText>
            <ThemedText type="default">Frequencia: { data.ds_frequencia_dose }</ThemedText>
            <ThemedText type="default">Receitado por: { data.no_profissional }</ThemedText>
            {/* <ListModules type="column" modulos={modulos?.submodules}/> */}
            
            {/* <Button type="default">Confirmar presença</Button> */}
        </ParallaxScrollView>
    )
}