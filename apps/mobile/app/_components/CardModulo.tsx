import { Modulo } from "@/data/general/types/modulo";
import { Card } from "./Card";
import { ThemedText } from "./ThemedText";
import { Image, TouchableOpacity, View, StyleSheet, Text, ImageBackground } from "react-native";
import { globals } from "@/utils/globals";
import { router } from "expo-router";
import ImageLayouts from "react-native-image-layouts";
import { Octicons } from "@expo/vector-icons";
import { Submodulo } from "@/data/general/types/submodulo";

const image = 
require("../_components/icons/dados.png")

type Props = {
    modulo: Modulo | Submodulo,
    type: "line" | "column" | "saude"
}

const rotas = {
    "saude.home": "(saude)",
    "saude.agendamentos": "(saude)/(agendamentos)",
    "saude.medicamentos": "(saude)/(medicamentos)",
    "saude.cns": "(saude)/(cns)",
    "saude.vacinas": "(saude)/(vacinas)",
    "saude.exames": "(saude)/(exames)",
    "saude.emergencia": "(saude)/(emergencia)",
    "saude.consultas": "(saude)/(consultas)",
    "saude.encaminhamentos": "(saude)/(encaminhamentos)",
    "saude.dados": "(saude)/(dados)",
    "saude.resultadoExame": "(saude)/(resultadoExame)",
    "ouvidoria.home": "(ouvidoria)",
}

const icones: { [key: string]: string } = {
    "Saúde": "heart-fill",
    "Emergência" : "alert",
    "Eventos" : "pin",
    "Noticias" : "note"
}

const imagens: { [key: string]: string } = {
    "Vacinas": require("../_components/icons/vacina.png"),
    "Dados" : require("../_components/icons/dados.png"),
    "CNS" : require("../_components/icons/cns.png"),
    "Emergência" : require("../_components/icons/emergencia.png"),
    "Consultas": require("../_components/icons/consulta.png"),
    "Encaminhamentos" : require("../_components/icons/encaminhamentos.png"),
    "Medicamentos" : require("../_components/icons/remedios.png"),
    "Agendamentos" : require("../_components/icons/agendamentos.png"),
    "Exames" : require("../_components/icons/exames.png"),
    "Resulttado de Exames" : require("../_components/icons/emergencia.png"),
    "Estoque" : require("../_components/icons/almoxarifado.png"),
}


export default function CardModulo({ modulo, type }: Props) {
        if (type == 'line'){
            return(
                <TouchableOpacity onPress={() => router.push(rotas[modulo?.id])}
                    style={{ backgroundColor: globals.colors.primary, padding: 10, borderRadius: 10 }}>
                    <ThemedText type="modulo" >{modulo.nome}</ThemedText>
                </TouchableOpacity> 
            )
        }
        if (type == 'column'){
            return(
                <TouchableOpacity
                className=""
                style={{
                    aspectRatio: 4,
                    backgroundColor: "#FFFFFF00",
                    borderRadius: 16
                }}
                onPress={() => router.push(rotas[modulo?.id])}
            >
                <View className="justify-start items-start"
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        backgroundColor: globals.colors.fg,
                        
                        display: "flex",
                        justifyContent: "center",
                        height: "100%",
                        
                        
                    }}
                >
                    <ImageBackground className=" rounded-lg" source={require("../_components/icons/dados.png")} style={{ width: "100%", height: "100%"}} resizeMode="cover" >
                        <View className="w-full flex gap-2 flex-row items-start bg-[#223c7f63] z-10 h-full p-6">
                            <Octicons size={20} color={"white"} name={icones[modulo.nome] as any}></Octicons>
                            <ThemedText type="default" style={{color: "white"}}>{modulo?.nome}</ThemedText>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
            )
        }
        if (type == "saude") {
            return(
                <TouchableOpacity
                    className="w-full h-32 shadow-sm rounded-lg items-center bg-white aspect-square justify-center pt-2"
                    onPress={() => router.push(rotas[modulo?.id])}>
                    {/* <Image style={{ width: "100%", height: "100%", borderRadius: 16 }} 
                    resizeMode="cover" source={{ uri: 'https://multivix.edu.br/wp-content/uploads/2023/05/area-de-saude.jpeg' }}>
                    </Image> */}
                    
                    <Image className="rounded-t-lg aspect-square" style={{ width: "100%", height: "70%"}} source={imagens[modulo.nome] as any} resizeMode="cover"></Image>
                    <View className="w-full bg-white p-2 z-20 rounded-b-lg">
                        <ThemedText numberOfLines={1} type="default" style={{
                            textAlign: "center",
                            width: "auto",
                            color: "black"
                        }}>{modulo?.nome}</ThemedText>
                    </View>
                    {/* <ThemedText>{modulo.nome}</ThemedText> */}
                </TouchableOpacity>
                // <Card type="outline"><ThemedText>{modulo.nome}</ThemedText></Card>
            
            )
        }
}

