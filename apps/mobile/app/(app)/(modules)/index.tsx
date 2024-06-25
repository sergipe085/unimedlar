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

type Props = {
  item: {
    imgUrl: string;
  }
  index: number;
}
const images = [
  { uri: 'https://www.unimed.coop.br/site/documents/605536/9842174/2022_09_30+-+UNIMED_BANNER-DIGITAL_V4_1440x411.jpg/1698f63e-b5ea-a6c7-479f-f49620c2f6e9?t=1666635179171&download=true' },
  { uri: 'https://www.unimedfortaleza.com.br/portaluploads/uploads/2022/06/unimed-lar.jpg' },
  { uri: 'https://www.valordeplanosdesaude.com.br/wp-content/uploads/2019/02/home-care-unimed-capa-770x400.jpg' }
];
export default function HomeScreen() {
  const { auth } = useAuth();

  return (
    <ParallaxScrollView>
      <ThemedView className='w-full flex flex-row items-center gap-2'>
        <Octicons size={22} name='home'></Octicons>
        <ThemedText type="title">Home</ThemedText>
      </ThemedView>
      <ThemedText type='subtitle' >Olá, {auth.user.nome}</ThemedText>
      <ThemedView className='w-full flex flex-column items-start gap-2'>
        <ThemedView className='flex flex-col gap-2'>
          <ThemedText>Essa é a sua visita do dia</ThemedText>
          <InformativeCard iconColor='green' Icon={Hospital} title={'Visita'}/>
        </ThemedView>
        
        <ThemedView className='w-full flex flex-row items-center gap-2'>

        </ThemedView>
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