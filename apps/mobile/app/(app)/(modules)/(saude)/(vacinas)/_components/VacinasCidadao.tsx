import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "@/app/_components/ThemedText";
import { Card } from "@/app/_components/Card";
import { Loading } from "@/app/_components/loading";
import { router } from "expo-router";
import { useVacinasCidadao } from "../../_api/hooks/useVacinaCidadao";
import { VacinaUnit } from "./VacinaUnit";

export function VacinasCidadao() {
    const { vacinas } = useVacinasCidadao();

    return (
        <>
            <ThemedText type="subtitle">Vacinas aplicadas</ThemedText>

            {
                !vacinas && (
                    <Loading/>
                )
            }

            <View>
                {
                    vacinas?.map((vacina, index) => {
                        return (
                            <VacinaUnit vacina={vacina} key={index}/>
                        )
                    })
                }
            </View>
        </>
    )
}