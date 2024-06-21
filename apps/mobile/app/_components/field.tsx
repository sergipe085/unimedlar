import React from "react";
import { View } from "react-native";
import { ThemedText } from "./ThemedText";
import { globals } from "@/utils/globals";

type Props = {
    children: React.ReactNode[];
}

export function Field({ children }: Props) {
    return (
        <View
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}
        >
            <ThemedText style={{ color: globals.colors.primary }}>{ children[0] }</ThemedText>
            <ThemedText>{ children[1] }</ThemedText>
        </View>
    )
}