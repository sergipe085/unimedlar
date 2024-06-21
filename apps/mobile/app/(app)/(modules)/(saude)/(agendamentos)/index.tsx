import { Image, StyleSheet, Platform, TouchableOpacity, View, Text } from 'react-native';

import { HelloWave } from '@/app/_components/HelloWave';
import ParallaxScrollView from '@/app/_components/ParallaxScrollView';
import { ThemedText } from '@/app/_components/ThemedText';
import { ThemedView } from '@/app/_components/ThemedView';
import { useAuth } from '@/data/auth/hooks/useAuth';
import { useModulos, useModulosEspecificos } from '@/data/general/hooks/useModulos';
import { AgendamentosCidadao } from './_components/agendamentos-cidadao';
import { ListModules } from '@/app/_components/ListModules';

export default function HomeAgendamentos() {
  const { auth } = useAuth();
  // const { modulos } = useModulos(null);

  // modulos.forEach(m => console.log(m))

  return (
    <ParallaxScrollView>
      <ThemedText type="title">Agendamentos</ThemedText>      
      <AgendamentosCidadao/>
    </ParallaxScrollView>
  );
}
