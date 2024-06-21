import { globals } from "@/utils/globals";
import { ActivityIndicator, View } from "react-native";

export function Loading() {
    return (
        <View
            style={{
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingTop: 48
            }}
        >
            <ActivityIndicator size={48} color={globals.colors.primary}></ActivityIndicator>
        </View>
    )
}