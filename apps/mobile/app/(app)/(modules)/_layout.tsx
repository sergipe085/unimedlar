import { Stack, Tabs } from 'expo-router';
import React, { Suspense } from 'react';

import { TabBarIcon } from '@/app/_components/navigation/TabBarIcon';
import { Octicons } from '@expo/vector-icons';
import { globals } from '@/utils/globals';
import { View } from 'react-native';
import { ThemedText } from '@/app/_components/ThemedText';

export default function TabLayout() {
  return (
    // <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: globals.colors.primary,
    //     tabBarShowLabel: false,
    //     headerShown: false,
    //     tabBarStyle: {
    //       height: 64,
    //       backgroundColor: globals.colors.bg
    //     },
        
    //   }}>
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: 'Home',
    //       tabBarIcon: ({ color, focused }) => (
    //         <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
    //       ),
    //     }}
    //   />

    //   {/* <Tabs.Screen
    //     name="saude"
    //     options={{
    //       title: 'Saude',
    //       tabBarIcon: ({ color, focused }) => (
    //         <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
    //       ),
    //     }}
    //   /> */}

    //   <Tabs.Screen
    //     name="settings"
    //     options={{
    //       title: 'settings',
    //       tabBarIcon: ({ color, focused }) => (
    //         <Octicons name="gear" size={28} style={[{ marginBottom: -3 }]} color={color}/>
    //       ),
    //     }}
    //   />
    // </Tabs>
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          // Hide the header for all other routes.
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(saude)"
        options={{
          // Hide the header for all other routes.
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(ouvidoria)"
        options={{
          // Hide the header for all other routes.
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="detalhes-visita"
        options={{
          // Hide the header for all other routes.
          headerShown: false,
        }}
      />
    </Stack>
  );
}
