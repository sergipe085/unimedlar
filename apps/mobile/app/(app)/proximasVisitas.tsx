import { Image, StyleSheet, Platform, TouchableOpacity, View, Text } from 'react-native';

import { HelloWave } from '@/app/_components/HelloWave';
import ParallaxScrollView from '@/app/_components/ParallaxScrollView';
import { ThemedText } from '@/app/_components/ThemedText';
import { ThemedView } from '@/app/_components/ThemedView';
import { Logout } from '@/app/_components/Logout';
import { ListModules } from '../_components/ListModules';
import { useModulos } from '@/data/general/hooks/useModulos';
import { router } from 'expo-router';
import { useVisitas } from './(modules)/api/useVisitas';
import { Octicons } from '@expo/vector-icons';
import { InformativeCard } from '../_components/InformativeCard';
import { Hospital } from 'lucide-react-native';
import { formatDateString } from '@/utils/dates';

export default function Modulos() {

  const { visitas } = useVisitas()


  return (
    <ParallaxScrollView>
    <ThemedView className='w-full flex flex-column gap-2'>
      <ThemedView className='w-full flex flex-row items-center gap-2'>
        <Octicons size={22} name='apps'></Octicons>
        <ThemedText type="title">Proximas visitas</ThemedText>
      </ThemedView>
        <ThemedText className='mb-2'>Proximas visistas</ThemedText>
        {
         visitas?.proximasVisitas?.length != 0 ? visitas?.proximasVisitas?.map(proxima => {
            return (
              <>
                <InformativeCard Icon={Hospital} title={'a'}>
                  <ThemedText>Data: {formatDateString(proxima?.dataVisita)}</ThemedText>
                  <ThemedText>Iniciada em: {proxima?.iniciadaEm  ?? '-'}</ThemedText>
                  <ThemedText>Finalizada em: {proxima?.finalizadaEm ?? '-'}</ThemedText>
                </InformativeCard>
              </>
            )
          }) : <ThemedText>Nenhuma visita encontrada</ThemedText>
        }
    </ThemedView>
  </ParallaxScrollView>
  );
}
