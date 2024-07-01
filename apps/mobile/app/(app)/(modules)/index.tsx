
import ParallaxScrollView from '@/app/_components/ParallaxScrollView';
import { ThemedText } from '@/app/_components/ThemedText';
import { ThemedView } from '@/app/_components/ThemedView';
import { useAuth } from '@/data/auth/hooks/useAuth';
import { Octicons } from '@expo/vector-icons';
import { useVisitas } from './_api/useVisitas';
import ListarVisitas from '@/app/_components/ListarVisitas';
import { Colors } from '@/constants/Colors';

type Props = {
  item: {
    imgUrl: string;
  }
  index: number;
}


export default function HomeScreen() {
  const { auth } = useAuth();
  const { visitas } = useVisitas()
  console.log(JSON.stringify(visitas, null, 2));


  return (

    <ParallaxScrollView >
      <ThemedView className='bg-blue'>
        <ThemedView className='w-full flex flex-row items-center gap-2'>
          <Octicons size={22} name='home'></Octicons>
          <ThemedText type="title">Home</ThemedText>
        </ThemedView>
        <ThemedText style={{color: Colors.unimedColors.laranja, marginBottom: 10  }} type='subtitle'>Olá, {auth?.user?.nome}</ThemedText>
        {/* <ThemedText type='subtitle'>Seu planejamento</ThemedText> */}
        <ListarVisitas />

      </ThemedView>


    </ParallaxScrollView>
  );
}
