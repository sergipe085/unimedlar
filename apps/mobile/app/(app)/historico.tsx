import { Image, StyleSheet, Platform, TouchableOpacity, View } from 'react-native';

import { HelloWave } from '@/app/_components/HelloWave';
import ParallaxScrollView from '@/app/_components/ParallaxScrollView';
import { ThemedText } from '@/app/_components/ThemedText';
import { ThemedView } from '@/app/_components/ThemedView';
import { Logout } from '@/app/_components/Logout';
import { ListModules } from '../_components/ListModules';
import { useModulos } from '@/data/general/hooks/useModulos';
import { router } from 'expo-router';
import { Octicons } from '@expo/vector-icons';
import { useHistorico } from './(modules)/api/useHistorico';
import { InformativeCard } from '../_components/InformativeCard';
import { Hospital } from 'lucide-react-native';
import { formatDateString } from '@/utils/dates';

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
          {
           historico?.length != 0 ? historico?.map(historico => {
              return (
                <>
                  <InformativeCard Icon={Hospital} title={'a'}>
                    <ThemedText>Data: {formatDateString(historico?.dataVisita)}</ThemedText>
                    <ThemedText>Iniciada em: {historico?.iniciadaEm  ?? '-'}</ThemedText>
                    <ThemedText>Finalizada em: {historico?.finalizadaEm ?? '-'}</ThemedText>
                  </InformativeCard>
                </>
              )
            }) : <ThemedText>Nenhuma visita encontrada</ThemedText>
          }
      </ThemedView>
    </ParallaxScrollView>
  );
}

