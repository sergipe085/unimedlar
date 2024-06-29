// import { TouchableOpacity } from "react-native";
import { TouchableOpacity } from "react-native";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface Props {
    type: "sim" | "nao",
    onPress: () => void;
}

export function BotaoRedondo({ type, onPress }: Props) {
    return (
        <>
            <TouchableOpacity onPressIn={onPress}
                onPress={() => { }}>
                <Ionicons color={type == 'sim' ? Colors.unimedColors.verde : Colors.unimedColors.vermelho } size={60} name={type == 'sim' ? 'checkmark-circle-outline' : 'close-circle-outline'} />

            </TouchableOpacity>
        </>
    )
}