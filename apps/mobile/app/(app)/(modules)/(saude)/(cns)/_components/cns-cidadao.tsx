import { StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/app/_components/ParallaxScrollView';
import { ThemedText } from '@/app/_components/ThemedText';
import { useAuth } from '@/data/auth/hooks/useAuth';
import { useCNSCidadao } from '../../_api/hooks/useCnsCidadao';
import Barcode from '@kichiyaki/react-native-barcode-generator'
import { globals } from '@/utils/globals';


export default function CnsCidadao() {
  const { auth } = useAuth();
  const { cns } = useCNSCidadao();

  // modulos.forEach(m => console.log(m))

  return (
    <View
      style={{
        backgroundColor: globals.colors.primary50,
        padding: 16,
        borderRadius: 16,
        minHeight: 156,
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <ThemedText>{ cns?.no_cidadao }</ThemedText>
      <ThemedText>{ cns?.nu_cns }</ThemedText>
      <Barcode style={{
        backgroundColor: "transparent",
      }} height={40} width={2} value={cns?.nu_cns ?? "111111111111"}/>
      {/* <ThemedText type="title">{cns[0]?.no_cidadao ?? '-'}</ThemedText>
      <ThemedText type="title">{cns[0]?.nu_cns ?? '-'}</ThemedText> */}
      {/* {cns[0]?.nu_cns ?
      <Barcode value={cns[0]?.nu_cns ?? '12345'} format='CODE128' /> : <ThemedText>CNS não encontrado</ThemedText>} */}
    </View>
  );
}
