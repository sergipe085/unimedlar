import { Dimensions, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { ChevronLeft } from "lucide-react-native";
import { Logo } from "./Logo";
import { router, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";

export function Header() {
    return (
        <View style={{
            width: Dimensions.get("window").width,
            backgroundColor: Colors.unimedColors.verde
        }} className=" h-20 pt-8 bg-[#008D52] flex flex-row items-center justify-between px-4">
            <TouchableOpacity onPress={() => {
                if (router.canGoBack()) {
                    router.back()
                }
            }} className=" w-24  justify-center">
                <ChevronLeft color={"white"}/>
            </TouchableOpacity>
            <View className="flex-row items-center justify-between gap-2 flex">
                <ThemedText style={{color: 'white'}} className="text-white">unimed lar</ThemedText>
                <Logo/>
            </View>
        </View>
    )
}