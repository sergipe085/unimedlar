import { Stack } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/app/_components/navigation/TabBarIcon';
import { Octicons } from '@expo/vector-icons';
import { globals } from '@/utils/globals';

export default function AgendamentosLayout() {
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
