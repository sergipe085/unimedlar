import { Redirect, Slot, Stack, Tabs } from 'expo-router';
import { useAuth } from '@/data/auth/hooks/useAuth';
import { useEffect } from 'react';
import { globals } from '@/utils/globals';
import { FontAwesome, FontAwesome5, Octicons } from '@expo/vector-icons';
import { TabBarIcon } from '../_components/navigation/TabBarIcon';

export default function RootLayout() {
  const { auth, loading, logout } = useAuth();

  if (loading) {
    return null;
  }

  if (!auth) {
    return <Redirect href={"/login"}/>
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: globals.colors.primary,
        tabBarShowLabel: true,
        headerShown: false,
        tabBarItemStyle:{
          display: "flex",
          gap: 4,
          flexDirection: "column"       
        },
        tabBarStyle: {
          borderTopColor: "white",
          height: 84,
          paddingTop: 12,
          gap: 12,
          display: "flex",
          backgroundColor: globals.colors.bg,
          shadowColor: "rgba(55, 65, 0, 0.3)",

          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.29,
          shadowRadius: 20,
      
          elevation: 7,
          borderRadius: 25,
        },
        
      }}>
      <Tabs.Screen
        name="(modules)"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Octicons size={28} name={'home'} color={color} />
          ),
        }}
      />

      {/* <Tabs.Screen
        name="saude"
        options={{
          title: 'Saude',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      /> */}

      <Tabs.Screen
        name="historico"
        options={{
          title: 'Modulos',
          tabBarIcon: ({ color, focused }) => (
            <Octicons name="apps" size={28} style={[{ marginBottom: -3 }]} color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="notificacoes"
        options={{
          title: 'Notificações',
          tabBarIcon: ({ color, focused }) => (
            <Octicons name="bell" size={28} style={[{ marginBottom: -3 }]} color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Configurações',
          tabBarIcon: ({ color, focused }) => (
            <Octicons name="person" size={28} style={[{ marginBottom: -3 }]} color={color}/>
          ),
        }}
      />
    </Tabs>
  );
}
