import { Image, StyleSheet, Platform, TouchableOpacity, View, Text, Dimensions } from 'react-native';

import ParallaxScrollView from '@/app/_components/ParallaxScrollView';
import { ThemedText } from '@/app/_components/ThemedText';
import { ThemedView } from '@/app/_components/ThemedView';
import { useAuth } from '@/data/auth/hooks/useAuth';
import { useModulos } from '@/data/general/hooks/useModulos';
import { Button } from '@/app/_components/Button';
import { router } from 'expo-router';
import { ViewJustifyBetween } from '@/app/_components/ViewJustifyBetween';
import { ListNoticias } from '@/app/_components/ListNoticias';
import { ListModules } from '@/app/_components/ListModules';
import { Octicons } from '@expo/vector-icons';
import { Carrossel } from '@/app/_components/Carrosel';
import Carousel from 'react-native-snap-carousel';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { InformativeCard } from '@/app/_components/InformativeCard';
import { Hospital } from 'lucide-react-native';
import { useVisitas } from './api/useVisitas';
import { formatDateString } from '@/utils/dates';
import { Colors } from '@/constants/Colors';

type Props = {
  item: {
    imgUrl: string;
  }
  index: number;
}

export default function HomeScreen() {
  const { auth } = useAuth();
  const { visitas } = useVisitas()
  console.log(JSON.stringify(visitas, null, 2));

  return (
    <ParallaxScrollView>
      <ThemedView className='w-full flex flex-row items-center gap-2'>
        <Octicons size={22} name='home'></Octicons>
        <ThemedText type="title">Home</ThemedText>
      </ThemedView>
      <ThemedText type='subtitle'  >Olá, {auth?.user?.nome ?? 'Usuario não identificado'}</ThemedText>
      <ThemedView className='w-full flex flex-column items-start gap-2'>
        <ThemedView className='flex flex-col gap-2 w-full'>
          <ThemedText type='subtitle' style={{ color: Colors.unimedColors.laranja, fontSize: 18 }}>Essa é a sua proxima visita</ThemedText>
          <ThemedView style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <ThemedText style={{ color: Colors.unimedColors.laranja, fontSize: 13 }}>Visita - {visitas?.proximaVisita?.atendimento?.titulo}</ThemedText>
            <ThemedView >
              <ThemedText style={{ fontSize: 13, color: Colors.unimedColors.laranja }}>Data e turno</ThemedText>
              <ThemedText style={{ fontSize: 13 }}>{formatDateString(visitas?.proximaVisita?.dataVisita)} - {visitas?.proximaVisita?.turno}</ThemedText>
            </ThemedView>
          </ThemedView>

        </ThemedView>

      </ThemedView>


    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  buttonsContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});


{/* <Button type='default' onPress={() => {
        router.push("(ouvidoria)")
      }}>Ir Modulo</Button>
      <Button type='default' onPress={() => {
        router.push("(saude)")
      }}>Ir Modulo</Button> */}