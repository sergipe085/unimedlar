import { globals } from "@/utils/globals";
import { View, StyleSheet, ViewProps, TouchableOpacityProps, TouchableOpacity } from "react-native";

type Props = {
    type: "default" | "outline" | "disabled" | "square"
} & ViewProps & TouchableOpacityProps;

export function Card({ children, type, style, ...props }: Props) {

    return (
        <TouchableOpacity
            style={[styles.core, styles[type], style]}
            { ...props }
        >
            { children }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    core: {
        height:56,
        // aspectRatio: 1,
        width: "100%",
        borderColor: globals.colors.primary,
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16
    },
    default: {
        backgroundColor: globals.colors.primary,
        borderWidth: 0,
    },
    outline: {
        // backgroundColor: "#F8567B",
        borderWidth: 3,
    },
    disabled: {
        backgroundColor: globals.colors.primary50,
    },  
    square: {
        backgroundColor: globals.colors.primary,
        width: 64,
        height: 64
    }, 
})