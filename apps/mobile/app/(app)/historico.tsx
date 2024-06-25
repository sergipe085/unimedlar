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

export default function Historico() {
  return (
    <ParallaxScrollView>
      <ThemedView className='w-full flex flex-column gap-2'>
        <ThemedView className='w-full flex flex-row items-center gap-2'>
          <Octicons size={22} name='apps'></Octicons>
          <ThemedText type="title">Histórico de consultas</ThemedText>
        </ThemedView>
          <ThemedText>Veja os modulos abaixo</ThemedText>
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
