import { View } from "react-native";
import { SubTitulo } from "./SubTitulo";
import { BotaoVerTodos } from "./BotaoVerTodos";

type Props = {
    name: string;
    onPress: (string) => void;

}

export function ViewJustifyBetween({ onPress, name }: Props) {
    return (
        <View style={{display: 'flex', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <SubTitulo name={name}/>
            <BotaoVerTodos  onPress={onPress}/>
        </View>
    )
}