import { Dimensions, Image, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Card } from "./Card";
import { LucideIcon } from "lucide-react-native";
import { globals } from "@/utils/globals";
import { ThemedText } from "./ThemedText";

type Props = {
    Icon: LucideIcon;
    title: string;
    description?: string;
    highlight?: boolean;
    iconColor?: "red" | "yellow" | "green" | "blue";
    image?: string
    children?: React.ReactNode;
} & TouchableOpacityProps

export function InformativeCard({ image, Icon, title, description, highlight = false, iconColor = "blue", className, children, ...props }: Props) {
    return (
        <TouchableOpacity {...props}>
            <View className={`h-[88px] min-h-[88px] px-4 ${className}`} style={{
                width: Dimensions.get("window").width,
                alignSelf: "center",
                height: 88,
                minHeight: 88
            }}>
                <View 
                    className={`w-full h-full flex flex-row items-center justify-start ${highlight ? 'bg-green-200' : ''}`}
                    style={{
                        borderRadius: 16
                    }}
                >
                    <View className="h-full aspect-square flex items-center justify-center">
                        {!image ? <Icon size={42} color={
                            iconColor == "blue" ? globals.colors.primary
                                : iconColor == "green" ? globals.colors.primary
                                    : iconColor == "red" ? globals.colors.red
                                        : globals.colors.primary

                        } /> : <Image src={image} />}
                    </View>
                    <View className="flex flex-col">
                        <View className="h-full pt-6">
                            {children}
                        </View>
                        <Text></Text>

                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}