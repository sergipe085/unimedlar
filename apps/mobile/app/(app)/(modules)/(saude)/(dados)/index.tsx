import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/app/_components/ParallaxScrollView';
import { ThemedText } from '@/app/_components/ThemedText';
import { useAuth } from '@/data/auth/hooks/useAuth';
import { AlergiasCidadao } from './_components/alergias-cidadao';
import { ProblemasCidadao } from './_components/problemas-cidadao';
import { MedicamentosCidadao } from '../(medicamentos)/_components/medicamentos-cidadao';
import { MedicamentosUsoContinuoCidadao } from './_components/medicamentos-continuos-cidadao';
export default function HomeConsultas() {
  const { auth } = useAuth();
  // const { modulos } = useModulos(null);

  // modulos.forEach(m => console.log(m))

  return (
    <ParallaxScrollView>
      <ThemedText type="title">Dados</ThemedText>
      <AlergiasCidadao />
      <ProblemasCidadao />
      <MedicamentosUsoContinuoCidadao />
    </ParallaxScrollView>
  );
}

