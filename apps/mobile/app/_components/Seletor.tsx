import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, ViewProps, Text } from "react-native";
import { Button } from "./Button";

type Props = {
    options: Option[];
    onSelect(option: Option | null): void;
} & ViewProps

type Option = {
    id: string;
    value: string;
}

export function Seletor({ options, onSelect, ...props }: Props) {
    const [activated, setActivated] = useState<Option | null>(null);
    
    async function handleSelect(option: Option) {
        if (option.id == activated?.id) {
            setActivated(null);
            onSelect(null);
            return;
        }

        setActivated(option);
        onSelect(option);
    }

    return (
        <View style={[{
            display: "flex",
            flexDirection: "column",
            gap: 8
        }, props.style]} {...props}>
            {
                options?.map(option => {
                    return (
                        <Button
                            type={ option.id == activated?.id ? "default" : "outline" }
                            onPress={async () => await handleSelect(option)}
                            key={option.id}
                            style={{
                                alignItems: "flex-start"
                            }}
                        >
                            { option.value }
                        </Button>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    activatedButton: {
        backgroundColor: "#F8567B"
    },
    desactivatedButton: {
        
    },
    activatedText: {
        color: "#151515"
    },
    desactivatedText: {
        color: "#F8567B"
    },
    button: {
        height:56,
        width: "100%",
        borderColor: "#F8567B",
        borderWidth: 3,
        borderRadius: 12,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingHorizontal: 16
    },
    text: {
        color: "#F8567B",
        fontWeight: "bold",
        fontSize: 16
    }
})