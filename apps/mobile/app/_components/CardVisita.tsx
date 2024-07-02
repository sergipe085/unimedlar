import { Button, Text, View } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { BotaoRedondo } from "./BotaoRedondo";
import { Colors } from "@/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Visitas } from "../(app)/(modules)/_api/interface/visitas";
import { useDetalhes } from "../(app)/(modules)/_api/useVisitas";
import { format, toZonedTime } from "date-fns-tz";
import { router } from "expo-router";

interface Props {
    visitaSelecionada: string;
    abrir: () => void;
    setCompareceu: (boolean: boolean) => void;
}
function formatarData(dataISO: string) {
    const timeZone = 'UTC'; // Use o fuso horário UTC para evitar mudanças de dia

    try {
        const data = new Date(dataISO);
        const dataZoned = toZonedTime(data, timeZone);

        // Formatando a data no formato DD/MM
        const dataFormatada = format(dataZoned, 'dd/MM');

        // Array com os dias da semana
        const diasDaSemana = [
            'dom',
            'seg',
            'ter',
            'qua',
            'qui',
            'sex',
            'sab'
        ];

        // Obtendo o dia da semana
        const diaDaSemana = diasDaSemana[dataZoned.getUTCDay()];

        return {
            dataFormatada,
            diaDaSemana
        };
    } catch (error) {
        console.error('Erro ao formatar data:', error);
        return {
            dataFormatada: '',
            diaDaSemana: ''
        };
    }
}

function capitalizeFirstLetter(string) {
    return string?.charAt(0)?.toUpperCase() + string?.slice(1);
}


export function CardVisita({ visitaSelecionada, abrir, setCompareceu }: Props) {

    const { detalhes } = useDetalhes(visitaSelecionada);

    return (
        <>
            <View style={{ display: 'flex', flexDirection: 'column', width: '100%', borderWidth: 1, borderRadius: 8, borderColor: '#5b5c65', height: 'auto' }}>
                <View style={{ display: 'flex', flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#5b5c65' }}>
                    <View style={{ width: '30%', padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRightColor: '#5b5c65', borderRightWidth: 1 }}>
                        <Text style={{ fontSize: 20 }}>{detalhes?.turno}</Text>
                        <Text>{formatarData(detalhes?.dataVisita).diaDaSemana}, {formatarData(detalhes?.dataVisita).dataFormatada}</Text>
                    </View>
                    <View style={{ padding: 4, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', width: '100%', gap: 10 }}>
                        <View>
                            <Text style={{ color: '#5b5c65', fontWeight: "600" }}>Profissional</Text>
                            {
                                detalhes?.atendimento?.profissionaisNecessarios?.map((prof, index) => {
                                    return (
                                        <Text style={{ color: '#5b5c65', fontWeight: "300" }}>{index + 1}. {capitalizeFirstLetter(prof)}</Text>
                                    )
                                })
                            }
                            {/* <Text style={{ color: '#5b5c65', fontWeight: "300" }}>Técnico de enfermagem</Text> */}
                        </View>
                        <View>
                            <Text style={{ color: '#5b5c65', fontWeight: "600" }}>Especialidade</Text>
                            <Text style={{ color: '#5b5c65', fontWeight: "300" }}>{capitalizeFirstLetter(detalhes?.atendimento?.titulo)}</Text>
                        </View>
                    </View>
                </View>



                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center', gap: 20, paddingVertical: 20 }}>
                    <TouchableOpacity onPress={() => router.push({
                        pathname: "detalhes-visita",
                        params: {
                            ...detalhes as any
                        }
                    })} style={{ backgroundColor: Colors.unimedColors.laranja, padding: 6, paddingHorizontal: 10, borderRadius: 8 }}>
                        <Text style={{ color: Colors.unimedColors.branco }}>Ver detalhes</Text>
                    </TouchableOpacity>
                    {
                        new Date(detalhes?.dataVisita) < new Date() &&
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                            <ThemedText style={{ color: Colors?.unimedColors?.laranja }}>Essa visita foi realizada?</ThemedText>
                            <View style={{ display: 'flex', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <BotaoRedondo type={'sim'} onPress={() => { abrir(); setCompareceu(true); }} />
                                <BotaoRedondo type={'nao'} onPress={() => setCompareceu(false)} />
                            </View>
                        </View>
                    }
                </View>
            </View>
        </>
    )
}