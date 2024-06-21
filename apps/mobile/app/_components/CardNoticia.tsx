import { Image, Text, View } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { globals } from "@/utils/globals";

export function CardNoticia({ img, localOrigem, titulo, data }) {
    return (
        <ThemedView style={{
            padding: 10, 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 10, 
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            elevation: 5
        }}>
            <View style={{display: "flex", flexDirection: 'row', gap: 10}}>
                <Image style={{height: 60, width: 60, borderRadius: 10}} src={img} />
                <View className="flex items-center justify-center">
                    <ThemedText type="default">{titulo}</ThemedText>
                </View>
            </View>
            {/* <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{color: '#888888'}}>{data}</Text>  
            </View> */}
        </ThemedView>
    );
}
