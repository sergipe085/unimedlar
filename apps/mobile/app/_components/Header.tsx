import { Dimensions, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { ChevronLeft } from "lucide-react-native";
import { Logo } from "./Logo";
import { router, useRouter } from "expo-router";
import { useEffect, useState } from "react";

export function Header() {
    return (
        <View style={{
            width: Dimensions.get("window").width,
        }} className=" h-28 pt-8 bg-bg flex flex-row items-center justify-between px-4">
            <TouchableOpacity onPress={() => {
                if (router.canGoBack()) {
                    router.back()
                }
            }} className=" w-24 h-full justify-center">
                <ChevronLeft color={"black"}/>
            </TouchableOpacity>
            <View className="flex-row items-center justify-between gap-2 flex">
                <ThemedText>unimed lar</ThemedText>
                <Logo/>
            </View>
        </View>
    )
}