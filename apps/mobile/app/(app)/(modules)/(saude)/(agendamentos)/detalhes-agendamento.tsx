import { Button } from "@/app/_components/Button";
import { Card } from "@/app/_components/Card";
import ParallaxScrollView from "@/app/_components/ParallaxScrollView";
import { ThemedText } from "@/app/_components/ThemedText";
import { Field } from "@/app/_components/field";
import { Agendamento } from "@/data/saude/types/agendamento";
import { formatarData } from "@/lib/date";
import { formatDateString } from "@/utils/dates";
import { useLocalSearchParams } from "expo-router";
import { Dimensions, View, Text } from "react-native";
import QRCode from 'react-native-qrcode-svg';
import { confirmarPresenca } from "./_api/confirmar-presenca";

export default function DetalhesAgendamento() {
    const data = useLocalSearchParams<Agendamento>();

    async function handleConfirmarPresenca() {
        await confirmarPresenca({
            co_unico_agendamento: data.codigo_unico_agendamento
        })
    }

    return (
        <ParallaxScrollView>
            <View
                style={{
                    width: "100%",
                    alignItems: "center"
                }}
            >
                <QRCode
                    value={data.codigo_unico_agendamento}
                    size={ Dimensions.get("window").width - 128 }
                />
                <ThemedText type="subtitle">{ data.codigo_unico_agendamento }</ThemedText>
            </View>
            <ThemedText type="subtitle">Agendamento para { data.ds_procedimento }</ThemedText>
            <Field children={["Unidade", data.no_unidade_destino]} />
            <Field children={["Data agendamento", formatDateString(data.dt_agendamento)]} />
            <Field children={["Horário", data.hr_agendamento]} />
            <Field children={["Profissional", data.no_profissional]} />
            <Field children={["Confirmada em", data.confirmado_em]} />
            <Field children={["Presença confirmada em", formatDateString(data.presenca_confirmada_em)]} />
            {/* <ListModules type="column" modulos={modulos?.submodules}/> */}
            
            {
                data.presenca_confirmada_em ? (
                    <Card type="default" disabled={true}><ThemedText style={{color: "white"}}>Presença confirmada</ThemedText></Card>
                ) : (
                    <Button onPress={handleConfirmarPresenca} type="outline">Confirmar presença</Button>
                )
            }

            
        </ParallaxScrollView>
    )
}