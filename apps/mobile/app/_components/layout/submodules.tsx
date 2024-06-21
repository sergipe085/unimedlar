import { Modulo } from "@/data/general/types/modulo"
import { View } from "react-native";
import { ThemedText } from "../ThemedText";

type Props = {
    modules: Modulo[];
}

export function Submodules({ modules }: Props) {
    return (
        <View>
            {
                modules.map(module => {
                    return (
                        <View>
                            <ThemedText>{ module.nome }</ThemedText>
                        </View>
                    )
                })
            }
        </View>
    )
}