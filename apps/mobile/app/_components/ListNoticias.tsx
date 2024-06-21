import { useNoticias } from "@/data/general/hooks/useNoticias"
import { CardNoticia } from "./CardNoticia"
import { ScrollView, TouchableOpacity } from "react-native";
import * as WebBrowser from 'expo-web-browser';


type Props = {
    maxRender: number
}

function formatDate(dateString) {
    const date = new Date(dateString);
    
    const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = monthNames[date.getMonth()]; // Meses são indexados a partir de 0
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}

export function ListNoticias({ maxRender }: Props) {

    const { noticias } = useNoticias()

    return (
        <ScrollView
        
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            gap: 20,
            // paddingVertical: 10,
            // marginBottom: 10,
            paddingVertical: 5,
            paddingBottom: 10,
            paddingHorizontal: 5,
            
        }}
    >
            {
                noticias?.toReversed().splice(0, 50).map((noticia, index) => {
                    return (
                        <TouchableOpacity onPress={async () => {
                            await WebBrowser.openBrowserAsync(`${process.env.EXPO_PUBLIC_WEB_URL}/noticia/${noticia.id}`);
                        }}>
                            <CardNoticia key={noticia?.id} img={noticia.imagens[0]} localOrigem={""} titulo={noticia?.titulo} data={formatDate(noticia.created_at)} />
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}