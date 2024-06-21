import { useState } from "react";
import { TouchableOpacity, TouchableOpacityProps, StyleSheet, Text, ActivityIndicator, View } from "react-native";
import { Card } from "./Card";
import { globals } from "@/utils/globals";

type Props = {
    type: "default" | "outline"
} & TouchableOpacityProps;

export function SquareButton({ type = "default", ...props }: Props) {

    const [loading, setLoading] = useState<boolean>(false);

    async function handleClick(event) {
        setLoading(true);

        if (props.onPress) {
            await new Promise(async(res, rej) => {
                try {
                    await props.onPress(event);
                    res(null);
                }
                catch(err) {
                    rej(err)
                    setLoading(false);
                }
            }) 
        }

        setLoading(false);
    }

    return (
            <Card disabled={loading} onPress={handleClick} type={loading ? "square" : "square"}>
                {
                    loading ? (
                        <ActivityIndicator color={"#151515"}/>
                    ) : (
                        <Text
                            style={[styles.text, styles[`text_${type}`]]}
                        >
                            { props.children }
                        </Text>
                    )
                }
            </Card>
    )
}

const styles = StyleSheet.create({
    button: {
        height:56,
        width: 56,
        borderColor: "#F8567B",
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16
    },
    default: {
        backgroundColor: "black",
        borderWidth: 0,
    },
    outline: {
        // backgroundColor: "#F8567B",
        borderWidth: 3,
    },
    loading: {
        backgroundColor: "#703643",
    },  
    text: {
        fontWeight: "bold",
        fontSize: 16
    },
    text_default: {
        color: "#151515",
    },
    text_outline: {
        color: "#F8567B",
    }
})