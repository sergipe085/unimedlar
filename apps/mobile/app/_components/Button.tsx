import { useState } from "react";
import { TouchableOpacity, TouchableOpacityProps, StyleSheet, Text, ActivityIndicator, View } from "react-native";
import { Card } from "./Card";
import { globals } from "@/utils/globals";

type Props = {
    type: "default" | "outline"
} & TouchableOpacityProps;

export function Button({ type = "default", ...props }: Props) {

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
        <Card type={loading ? "disabled" : type} disabled={loading} onPress={handleClick} className={props.className}>
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
        height:48,
        width: "100%",
        borderColor: "#F8567B",
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16
    },
    default: {
        backgroundColor: "#F8567B",
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
        fontSize: 16,
    },
    text_default: {
        color: globals.colors.white,
    },
    text_outline: {
        color: globals.colors.primary,
    }
})