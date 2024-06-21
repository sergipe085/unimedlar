import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./ThemedText";

type Props = {
    onPress: (string) => void;
}
export function BotaoVerTodos({  onPress }: Props) {
    return (
        <TouchableOpacity onPress={onPress}>
            <ThemedText>Ver todos</ThemedText>
        </TouchableOpacity>
    )
}