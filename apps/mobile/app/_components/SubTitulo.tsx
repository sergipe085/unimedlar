import { Colors } from "@/constants/Colors";
import { Text } from "react-native";
import { ThemedText } from "./ThemedText";

type Props = {
    name: string;
}

export function SubTitulo({ name }: Props) {
    return (
        <>
            <ThemedText >{name}</ThemedText>
        </>
    )
}