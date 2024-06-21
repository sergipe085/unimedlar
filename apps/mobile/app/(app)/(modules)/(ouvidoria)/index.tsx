import { Image, StyleSheet, Platform, TouchableOpacity, View } from 'react-native';

import { HelloWave } from '@/app/_components/HelloWave';
import ParallaxScrollView from '@/app/_components/ParallaxScrollView';
import { ThemedText } from '@/app/_components/ThemedText';
import { ThemedView } from '@/app/_components/ThemedView';
import { useAuth } from '@/data/auth/hooks/useAuth';
import { useModulos } from '@/data/general/hooks/useModulos';
import { ActionsContainer } from '@/app/_components/ActionsContainer';
import { Plus } from 'lucide-react-native';
import { router } from 'expo-router';
import { ChamadosDoCidadao } from './_components/ChamadosDoCidadao';

export default function HomeOuvidoria() {
  return (
    <ParallaxScrollView>
      <ActionsContainer actions={[
        {
          action: async () => router.push({
            pathname: "criar-chamado",
            params: {
              etapa: "0"
            }
          }),
          icon: Plus
        }
      ]}/>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Ouvidoria</ThemedText>
      </ThemedView>
      <ChamadosDoCidadao/>
      {/* <ThemedText type="default">Estamos aqui para ajudar você</ThemedText> */}
      
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
