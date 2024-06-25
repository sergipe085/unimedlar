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

type Props = {
  item : {
    imgUrl: string;
  }
  index: number;
}


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
        <ThemedView className='flex flex-row gap-2 items-center'>
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