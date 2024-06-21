import { Dimensions, View } from "react-native";
import {  LucideIcon } from "lucide-react-native";
import { globals } from "@/utils/globals";
import { SquareButton } from "./SquareButton";
import { Button } from "./Button";
import { ThemedText } from "./ThemedText";

type Props = {
    actions: {
        icon: LucideIcon,
        action: () => Promise<void>;
        disabled?: boolean;
        type?: "unit" | "full";
        title?: string;
    }[]
}

export function ActionsContainer({ actions }: Props) {
    return (
        <View
            style={{
                position: "absolute",
                bottom: 0,
                gap: 8,
                display: "flex",
                flexDirection: actions.filter(a => a.type == "full").length > 1 ? "column" : "row",
                justifyContent: "space-between",
                width: Dimensions.get("window").width,
                zIndex: 999,
                alignSelf: "center",
                padding: 12
            }}

        >
            {
                actions?.map((action, index) => {
                    if (action.disabled) {
                        return null;
                    }

                    if (action.type && action.type == "full") {
                        return (

                            <Button className="text-white gap-16 flex" key={`action_${index}`} onPress={action.action} type={"default"}>
                                <View className="flex flex-row items-center">
                                    <ThemedText type="modulo">  
                                        {action.title}
                                    </ThemedText>
                                    <action.icon className="" color={globals.colors.white}/>
                                </View>
                            </Button>
                        )
                    }

                    return (
                        <SquareButton key={`action_${index}`} onPress={action.action} type={"default"}>
                            
                            <action.icon color={globals.colors.white}/>
                        </SquareButton>
                    )
                })
            }
        </View>
    )
}