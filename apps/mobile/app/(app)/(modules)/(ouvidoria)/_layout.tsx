import { Stack } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/app/_components/navigation/TabBarIcon';
import { Octicons } from '@expo/vector-icons';
import { globals } from '@/utils/globals';
import { CriarChamadaEtapaInicial } from './_components/CriarChamadoEtapaInicial';

export default function OuvidoriaLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,   
      }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
