import { Image, StyleSheet, Platform, TouchableOpacity, View, Text, Dimensions } from 'react-native';

import { HelloWave } from '@/app/_components/HelloWave';
import ParallaxScrollView from '@/app/_components/ParallaxScrollView';
import { ThemedText } from '@/app/_components/ThemedText';
import { ThemedView } from '@/app/_components/ThemedView';
import { useAuth } from '@/data/auth/hooks/useAuth';
import { useModulos, useModulosEspecificos } from '@/data/general/hooks/useModulos';
import { ListModules } from '@/app/_components/ListModules';
import { Button } from '@/app/_components/Button';
import { router } from 'expo-router';
import { Loading } from '@/app/_components/loading';
import CnsCidadao from './(cns)/_components/cns-cidadao';

export default function HomeSaude() {
  const { auth } = useAuth();
  const { modulos } = useModulosEspecificos({idModulo: "saude.home"})

  return (
    <ParallaxScrollView>
      <ThemedText type="title">Saúde</ThemedText>
      <ThemedText type="default">Vamos verificar como está sua saúde hoje?</ThemedText>
      <ListModules type="saude" modulos={modulos?.submodules ?? []}/>
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