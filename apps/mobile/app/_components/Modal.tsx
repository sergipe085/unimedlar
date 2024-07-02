import { Colors } from '@/constants/Colors'
import BotomSheet from '@gorhom/bottom-sheet'
import { useMemo, useRef, useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ThemedText } from './ThemedText'
import { BotaoRedondo } from './BotaoRedondo'
// import image from '@/assets/images/rostos/'

import chorando from '@/assets/images/rostos/muito-triste.png';
import triste from '@/assets/images/rostos/triste.png';
import rostoNeutro from '@/assets/images/rostos/rosto-neutro.png';
import feliz from '@/assets/images/rostos/feliz.png';
import muitoFeliz from '@/assets/images/rostos/muito-feliz.png';
import { Button } from './Button'

export function Modal({ bottomSheetref, detalhes, setBodyAvaliacao, bodyAvaliacao, enviarAvaliacao }) {
  const snapPoints = useMemo(() => ["30%", "80%", "90%"], [])


  const opcoes = [
    { opcao: 'MUITO RUIM', url: chorando },
    { opcao: 'RUIM', url: triste },
    { opcao: 'REGULAR', url: rostoNeutro },
    { opcao: 'BOM', url: feliz },
    { opcao: 'MUITO BOM', url: muitoFeliz },
  ]


  function fechar() {
    bottomSheetref.current.close()
  }

  return (
    <>
      <BotomSheet

        ref={bottomSheetref}
        index={-1}
        snapPoints={snapPoints}
        backgroundStyle={{ 
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 2,
          shadowRadius: 2,
          elevation: 100,}}
        enablePanDownToClose
      >
        <View style={{ width: '100%', padding: 10, display: 'flex', gap: 10 }}>
          <View>
            {/* <Button title='Fechar' onPress={() => fechar()} /> */}
            <ThemedText type='subtitle'  style={{ textAlign: 'center', color: Colors.unimedColors.laranja }}>Avalie sua consulta</ThemedText >
          </View>

          <View>
            <Text style={{textAlign: 'center'}}>Profissional cumpriu carga horaria prevista? ({detalhes?.atendimento?.duracaoEmHoras} horas)</Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
              <View style={{ borderWidth: bodyAvaliacao.cumpriuHorario == true ? 2 : 0, borderRadius: 10, borderColor: Colors.unimedColors.verde }}>
                <BotaoRedondo type={'sim'} onPress={() => setBodyAvaliacao({ ...bodyAvaliacao, cumpriuHorario: true })} />
              </View>
              <View style={{ borderWidth: bodyAvaliacao.cumpriuHorario == false ? 2 : 0, borderRadius: 10, borderColor: Colors.unimedColors.vermelho }}>
                <BotaoRedondo type={'nao'} onPress={() => setBodyAvaliacao({ ...bodyAvaliacao, cumpriuHorario: false })} />
              </View>

            </View>

          </View>
          <View>
            <Text style={{textAlign: 'center'}}>Como voce avalia a qualidade do seu atendimento?</Text>
            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around', }}>

              {opcoes.map((opcao, index) => (
                <TouchableOpacity
                  key={index}
                  style={{ backgroundColor: 'transparent', padding: 4, alignItems: 'center' }}
                  onPress={() => setBodyAvaliacao({ ...bodyAvaliacao, qualidadeAtendimento: opcao.opcao })}
                >
                  <View style={{ borderColor: bodyAvaliacao.qualidadeAtendimento === opcao.opcao ? Colors.unimedColors.verde : '#e8e8e8', padding: 4, borderRadius: 5, borderWidth: bodyAvaliacao.qualidadeAtendimento == opcao.opcao ? 2 : 0 }}>
                    <Image style={{ height: 40, width: 40 }} source={opcao.url} />
                  </View>
                  <Text>{(opcao.opcao).toLowerCase()}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View>
            {/* <Text style={{ marginBottom: 2 }}>Deseja enviar um feedback adicional?</Text> */}
            <Text style={{ marginBottom: 2, textAlign: 'center' }}>Deseja enviar um feedback adicional?</Text>
            <TextInput onChangeText={(text) => setBodyAvaliacao({ ...bodyAvaliacao, feedback: text })} numberOfLines={3} placeholder='feedback' style={{ backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 10 }} />
          </View>

          <Button onPress={enviarAvaliacao} type={'default'}>
            <Text>Enviar avaliação</Text>
          </Button>

        </View>
      </BotomSheet>
    </>
  )
}