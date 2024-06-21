import { Stack } from 'expo-router';
import React from 'react';

export default function SaudeLayout() {
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
      <Stack.Screen
        name="(agendamentos)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(cns)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(medicamentos)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
