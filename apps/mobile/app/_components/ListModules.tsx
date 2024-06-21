import { useModulos } from "@/data/general/hooks/useModulos";
import { Dimensions, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { globals } from "@/utils/globals";
import { Modulo } from "@/data/general/types/modulo";
import { router } from "expo-router";
import CardModulo from "./CardModulo";
import { Submodulo } from "@/data/general/types/submodulo";
import ImageLayouts from "react-native-image-layouts";


type Props = {
    modulos: Modulo[] | Submodulo[],
    type?: 'line' | 'column'| 'saude';
}

export function ListModules({ modulos, type }: Props) {
    useEffect(() => {
        console.log(type)
    }, [type])

    if (type == "line") {
        return (
            <View 
                style={{
                    width: Dimensions.get("window").width,
                    alignSelf: "center",
                }}
            >
                <ScrollView
                    horizontal={type == 'line' && true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false} 
                    contentContainerStyle={{
                        gap: 8,
                        // paddingVertical: 10,
                        marginBottom: 8,
                        paddingLeft: 12,
                    }}
                >
                    {modulos?.filter(m => m.disabled == false).map((item, index) => {
                        // console.log(item)
                        return (
                            <CardModulo key={item.id} type={type} modulo={item} />
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
    else if (type == "column"){
        return (
            <View className="h-full items-center w-full">
                <ImageLayouts
                    data={modulos}
                    refreshControl={
                        // <RefreshControl refreshing={loading} onRefresh={handleRefresh} />
                        <></>
                    }
                    showsVerticalScrollIndicator={false}
                    numberOfColumns={1}
                    patterns={[]}
                    renderItem={(data, _index) => {
                        return (
                            <CardModulo key={_index} type={"column"} modulo={data}/>
                        )
                    }}
                    dividerPadding={3}
                    
                />
            </View>
        )
    }
    else if(type== "saude"){
        return (
            <ImageLayouts
                data={modulos}
                // refreshControl={
                //     <RefreshControl refreshing={loading} onRefresh={handleRefresh} />
                // }
                numberOfColumns={3}
                patterns={[3]}
                renderItem={(data, _index) => {
                    return (
                        <CardModulo key={data.id} type={type} modulo={data} />
                    )
                }}
                dividerPadding={6}
            />
        )
    }

    
}

