import { Image, StyleSheet, Platform, TouchableOpacity, View } from 'react-native';

import { HelloWave } from '@/app/_components/HelloWave';
import ParallaxScrollView from '@/app/_components/ParallaxScrollView';
import { ThemedText } from '@/app/_components/ThemedText';
import { ThemedView } from '@/app/_components/ThemedView';
import { useAuth } from '@/data/auth/hooks/useAuth';
import { useModulos } from '@/data/general/hooks/useModulos';
import { ActionsContainer } from '@/app/_components/ActionsContainer';
import { Camera, Check, ChevronRight, Plus } from 'lucide-react-native';
import { Input } from '@/app/_components/Input';
import { CriarChamadaEtapaInicial } from './_components/CriarChamadoEtapaInicial';
import { useEffect, useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { CriarChamadaEtapaLocalizacao } from './_components/CriarChamadoEtapaLocalizacao';
import { CriarChamadaEtapaImagens } from './_components/CriarChamadoEtapaImagens';

export default function CriarChamado() {
  const [etapa, setEtapa] = useState<number>(0);
  const { etapa: etapaParams } = useLocalSearchParams();
  
  useEffect(() => {
    console.log(etapaParams);
    setEtapa(Number(etapaParams))
  }, [etapaParams])

  return (
    <ParallaxScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Criar chamado {etapa}</ThemedText>
        {/* <HelloWave /> */}
      </ThemedView>

      {
        etapa == 0 ? 
        (
          <CriarChamadaEtapaInicial
            onContinue={() =>{
              console.log("Etapa Inicial")
              router.push({
                pathname: "criar-chamado",
                params: {
                  etapa: Number(etapaParams) + 1
                }
              })
            }}
          />
        ) : 
        etapa == 1 ? (
          <CriarChamadaEtapaLocalizacao
            onContinue={() =>{
              console.log("Etapa Inicial")
              router.push({
                pathname: "criar-chamado",
                params: {
                  etapa: Number(etapaParams) + 1
                }
              })
            }}
          />
        ) : 
        etapa == 2 ? (
          <CriarChamadaEtapaImagens
            onContinue={() =>{
              console.log("Etapa Inicial")
              router.push({
                pathname: "criar-chamado",
                params: {
                  etapa: Number(etapaParams) + 1
                }
              })
            }}
          />
        ) :
        (
          <>
            <ActionsContainer actions={[{
              title: "Finalizar",
              icon: Check,
              action: async () => router.navigate("(ouvidoria)"),
              type: "full"
            }]}/>
            <View>
              <ThemedText type="subtitle">Seu chamado foi recebido e logo será resolvido</ThemedText>
              
            </View>
          </>
        )
      }

      
    
      {/* <Modules/> */}
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
