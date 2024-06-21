import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/app/_components/ParallaxScrollView';
import { ThemedText } from '@/app/_components/ThemedText';
import { useAuth } from '@/data/auth/hooks/useAuth';
import { ConsultasCidadao } from './_components/consultas-cidadao';
export default function HomeConsultas() {
  const { auth } = useAuth();
  // const { modulos } = useModulos(null);

  // modulos.forEach(m => console.log(m))

  return (
    <ParallaxScrollView>
      <ThemedText type="title">Consultas</ThemedText>
      <ConsultasCidadao/>
      {/* <ListModules type="column" modulos={modulos?.submodules}/> */}
      
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