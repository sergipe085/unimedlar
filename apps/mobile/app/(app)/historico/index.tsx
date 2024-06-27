import { Image, StyleSheet, Platform, TouchableOpacity, View, ScrollView } from 'react-native';

import { HelloWave } from '@/app/_components/HelloWave';
import ParallaxScrollView from '@/app/_components/ParallaxScrollView';
import { ThemedText } from '@/app/_components/ThemedText';
import { ThemedView } from '@/app/_components/ThemedView';
import { Logout } from '@/app/_components/Logout';
import { useModulos } from '@/data/general/hooks/useModulos';
import { router } from 'expo-router';
import { Octicons } from '@expo/vector-icons';
import { Hospital } from 'lucide-react-native';
import { formatDateString } from '@/utils/dates';
import { InformativeCard } from '@/app/_components/InformativeCard';
import { useHistorico } from '../(modules)/api/useHistorico';

export default function Historico() {

    const { historico } = useHistorico()
    console.log(JSON.stringify(historico, null, 2));
    return (
        <ParallaxScrollView>
            <ThemedView className='w-full flex flex-column gap-2'>
                <ThemedView className='w-full flex flex-row items-center gap-2'>
                    <Octicons size={22} name='apps'></Octicons>
                    <ThemedText type="title">Histórico de consultas</ThemedText>
                </ThemedView>
                <ThemedText className='mb-2'>Ultimas visistas</ThemedText>
                <ScrollView showsVerticalScrollIndicator={false} style={{ display: 'flex', height: '90%' }} >
                    {
                        historico?.length != 0 ? historico?.map(historico => {
                            return (
                                <>
                                    <InformativeCard 
                                    onPress={() => router.push({
                                        pathname: "detalhes-visita",
                                        params: {
                                            ...historico as any
                                        }
                                    })} style={{ marginBottom: 10 }} key={historico.id} Icon={Hospital} title={'a'}>
                                        <ThemedText>Data: {formatDateString(historico?.dataVisita)}</ThemedText>
                                        <ThemedText>Turno: {historico?.turno ?? '-'}</ThemedText>
                                        <ThemedText>Tipo: {historico?.tipo ?? '-'}</ThemedText>
                                    </InformativeCard>
                                </>
                            )
                        }) : <ThemedText>Nenhuma visita encontrada</ThemedText>
                    }

                </ScrollView>
            </ThemedView>
        </ParallaxScrollView>
    );
}

