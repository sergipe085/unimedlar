import { Image, StyleSheet, Platform, TouchableOpacity, View, Text } from 'react-native';

import { HelloWave } from '@/app/_components/HelloWave';
import ParallaxScrollView from '@/app/_components/ParallaxScrollView';
import { ThemedText } from '@/app/_components/ThemedText';
import { ThemedView } from '@/app/_components/ThemedView';
import { Logout } from '@/app/_components/Logout';
import { ListModules } from '../_components/ListModules';
import { useModulos } from '@/data/general/hooks/useModulos';
import { router } from 'expo-router';

export default function Modulos() {

  const { modulos } = useModulos()

  console.log(modulos)

  return (
    <ParallaxScrollView>
  
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Módulos</ThemedText>
      </ThemedView>
      <View style={{ paddingBottom: 30 }}>
        <ListModules modulos={modulos} />
      </View>
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
