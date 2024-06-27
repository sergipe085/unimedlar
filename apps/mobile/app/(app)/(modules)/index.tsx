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
          <ThemedText type='subtitle' style={{color: Colors.unimedColors.laranja, fontSize: 18}}>Essa é a sua proxima visita</ThemedText>
          <ThemedView className='p-4 bg-green-300 rounded-sm'>
            <ThemedView className='flex flex-row justify-between mb-2'>
              <ThemedText className="text-xl font-extrabold" style={{color: Colors?.unimedColors?.laranja}}>Visita para {visitas?.proximaVisita?.atendimento?.acompanhamento?.paciente?.nome}</ThemedText>
              <ThemedText>{`${formatDateString(visitas?.proximaVisita?.dataVisita)}`}</ThemedText>

            </ThemedView> 
            <ThemedText>{`Duração: ${visitas?.proximaVisita?.atendimento?.duracaoEmHoras} horas`}</ThemedText>
            <ThemedText style={{color: Colors.unimedColors.laranja}}>Precedimentos a serem realizados:</ThemedText>
            <ThemedView className='pl-4'>
              {
                visitas?.proximaVisita?.atendimento?.procedimentos?.map(procedimento => {
                  return (
                    <>
                      <ThemedText>{procedimento?.quantidade} X {procedimento?.procedimentoId}</ThemedText>
                      <ThemedText>Medicamento: {procedimento?.medicamentoId ?? 'Sem medicamento'}</ThemedText>
                      <ThemedText>Duração do procedimento: {procedimento?.duracaoEmHoras != undefined && procedimento?.duracaoEmHoras != null ? `${procedimento.duracaoEmHoras} hora(s)` : '-'}</ThemedText>

                    </>
                  )
                })
              }

            </ThemedView>

          </ThemedView>

        </ThemedView>

        {/* <ThemedView className='flex flex-col gap-2 w-full'>
          <ThemedText>Proximas visitas</ThemedText>
          {
            visitas?.proximasVisitas?.map(proximaVisita => {
              return (
                <InformativeCard description={`Data: ${formatDateString(proximaVisita.dataVisita)}`} highlight={true} iconColor='green' Icon={Hospital} title={'Visita'}>
                  <ThemedText className="text-sm font-extrabold">Visita</ThemedText>
                  <ThemedText>{`Data: ${formatDateString(proximaVisita.dataVisita)}`}</ThemedText>
                  {proximaVisita?.atendimento?.duracaoEmHoras && <ThemedText>{`${proximaVisita?.atendimento?.duracaoEmHoras}`}</ThemedText>}
                </InformativeCard>

              )
            })
          }
        </ThemedView> */}

        {/* <ThemedView className='w-full flex flex-row items-center gap-2'>

        </ThemedView> */}
      </ThemedView>
      {/* <Carrossel images={images}></Carrossel> */}




      {/* <ViewJustifyBetween name={'Modulos'}
        onPress={() => { router.push("modulos") }} />
      <ListModules  type='line' modulos={modulos} />


      <ViewJustifyBetween name={'Noticias Recentes'} onPress={function (string: any): void {
        throw new Error('Function not implemented.');
      }}/>
      <ListNoticias maxRender={5} /> */}
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