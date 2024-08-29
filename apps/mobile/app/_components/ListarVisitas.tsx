import { TouchableOpacity, View, ScrollView } from 'react-native';

import { ThemedText } from '@/app/_components/ThemedText';
import { ThemedView } from '@/app/_components/ThemedView';
import { Colors } from '@/constants/Colors';
import { format, toZonedTime } from 'date-fns-tz';
import { avaliarVisita, useDetalhes, useVisitas } from '../(app)/(modules)/_api/useVisitas';
import { Visita } from '../(app)/(modules)/_api/interface/visitas';
import { useEffect, useRef, useState } from 'react';
import DetalhesVisita from './DetalhesVisita';
import { BotaoRedondo } from './BotaoRedondo';
import { Modal } from './Modal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';

function formatarData(dataISO) {
    const timeZone = 'UTC'; // Use o fuso horário UTC para evitar mudanças de dia

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
}

export interface Avaliacao {
    // compareceu: boolean;
    cumpriuHorario: boolean;
    qualidadeAtendimento: string;
    feedback: string;
}

export default function ListarVisitas() {
    const { visitas } = useVisitas()
    const [visitaSelecionada, setVisitaSelecionada] = useState<string>()
    const [visita, setVisita] = useState<number>()

    const [bodyAvaliacao, setBodyAvaliacao] = useState({} as Avaliacao)
    const [compareceu, setCompareceu] = useState<boolean>()

    const bodyEnviarAvaliacao = {
        idVisita: visitaSelecionada,
        qualidadeAtendimento: bodyAvaliacao.qualidadeAtendimento,
        cumpriuHorario: bodyAvaliacao.cumpriuHorario,
        compareceu,
        feedback: bodyAvaliacao.feedback
    }

    console.log(bodyEnviarAvaliacao)


    const { detalhes } = useDetalhes(visitaSelecionada)

    useEffect(() => {
        if (visitas?.proximaVisita) {
            setVisitaSelecionada(visitas.proximaVisita.id);
        }
    }, [visitas])

    // vermelha - visita e nao compareceu
    // laranja nao tao claro - nao respondeu
    // verde - visita e compareceu
    // laranja forte - proxima visita 
    // laranja claro, proximas visitas

    // console.log(detalhes)


    function getCorVisita(visita: Visita) {
        if (!visita.avaliacao) {
            return "#f6934dad"
        }

        if (visita.avaliacao.profissionalCompareceu == true) {
            return "#008D52"
        } else if (visita.avaliacao.profissionalCompareceu == false) {
            return "#E52929"
        } else if (new Date(visita.dataVisita) > new Date() && visita.id != visitas.proximaVisita.id) {
            return "#f6934dad"
        } else if (visita.id == visitas.proximaVisita?.id) {
            return Colors.unimedColors.laranja
        } else {
            return "#909090ac"
        }
    }

    // console.log(visitaSelecionada)

    const scrollViewRef = useRef(null);

    useEffect(() => {
        if (visitas?.proximaVisita && scrollViewRef.current) {
            const index = visitas.visitas.findIndex(visita => visita.id === visitas.proximaVisita.id);
            if (index !== -1) {
                const itemWidth = 100; // Largura estimada do item
                const gap = 12; // Espaçamento entre os itens
                const offset = (index * (itemWidth + gap)) - (itemWidth / 2) + (scrollViewRef.current.clientWidth / 2);
                scrollViewRef.current.scrollTo({ x: offset, animated: true });
            }
        }
    }, [visitas]);
    const bottomSheetref = useRef<BottomSheet>(null);

    function abrir() {
        bottomSheetref.current.expand()
    }

    if (!visitas) {
        return (
            <ThemedText>ASUDHASD</ThemedText>
        )
    }

    return (
        <>

        

        <ThemedView style={{ display: 'flex', flexDirection: 'column' }} >
            {/* <ThemedText>{bodyAvaliacao.feedback}</ThemedText>
            <ThemedText>{bodyAvaliacao.cumpriuHorario ? 'sim' : 'nao'}</ThemedText>
            <ThemedText>{compareceu ? 'sim' : 'nao'}</ThemedText>
            <ThemedText>{bodyAvaliacao.qualidadeAtendimento}</ThemedText> */}
            <ScrollView style={{ marginBottom: 10 }} ref={scrollViewRef} horizontal contentContainerStyle={{ gap: 12 }} showsHorizontalScrollIndicator={false}>
                {
                    visitas?.visitas?.map((visita, index) => {

                        if (!visita.id) {
                            return (
                                <ThemedView >
                                    <View style={{ height: 20, borderRadius: 50, width: 20, backgroundColor: getCorVisita(visita) }}></View>
                                    <ThemedText type='subtitle' style={{ fontSize: 15 }}>{formatarData(visita.dataVisita).dataFormatada}</ThemedText>
                                    <ThemedText type='subtitle' style={{ fontSize: 15 }}>{formatarData(visita.dataVisita).diaDaSemana}</ThemedText>
                                </ThemedView>
                            )
                        }

                        return (
                            <TouchableOpacity key={visita?.id} style={{ display: 'flex', alignItems: 'center' }} onPress={() => { setVisitaSelecionada(visita.id); setVisita(index) }}>
                                <ThemedView style={{ borderWidth: visita?.id == visitas.proximaVisita?.id ? 2 : 0, borderColor: getCorVisita(visita), borderRadius: 15 }} className='flex flex-col items-center justify-between  p-2 px-4 rounded-xl'>
                                    <View style={{ height: 20, borderRadius: 50, width: 20, backgroundColor: getCorVisita(visita) }}></View>
                                    <ThemedText type='subtitle' style={{ fontSize: 15 }}>{formatarData(visita.dataVisita).dataFormatada}</ThemedText>
                                    <ThemedText type='subtitle' style={{ fontSize: 15 }}>{formatarData(visita.dataVisita).diaDaSemana}</ThemedText>
                                </ThemedView>
                                {visita?.id == visitas?.proximaVisita?.id && <ThemedText style={{ fontSize: 13, color: getCorVisita(visita) }}>próxima</ThemedText>}
                            </TouchableOpacity>
                        )
                    })
                }


            </ScrollView>
            <ThemedView style={{ display: 'flex', gap: 20 }}>

                <DetalhesVisita visitaSelecionada={visitaSelecionada} abrir={abrir} setCompareceu={setCompareceu} />

            </ThemedView>


        </ThemedView>
            <Modal bottomSheetref={bottomSheetref} detalhes={detalhes}
            setBodyAvaliacao={setBodyAvaliacao} bodyAvaliacao={bodyAvaliacao} enviarAvaliacao={() => console.log(bodyEnviarAvaliacao)} />
        </>
    );
}
